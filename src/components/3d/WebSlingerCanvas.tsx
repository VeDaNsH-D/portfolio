import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface WebSlingerCanvasProps {
  scrollProgress: number; // 0 to 1
  reducedMotion?: boolean;
}

export const WebSlingerCanvas: React.FC<WebSlingerCanvasProps> = ({
  scrollProgress,
  reducedMotion = false,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const targetScrollRef = useRef(scrollProgress);
  const currentScrollRef = useRef(scrollProgress);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const [webGLError] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    try {
      const canvasTest = document.createElement('canvas');
      return !(canvasTest.getContext('webgl') || canvasTest.getContext('experimental-webgl'));
    } catch {

      return true;
    }
  });

  // Keep target scroll updated

  useEffect(() => {
    targetScrollRef.current = scrollProgress;
  }, [scrollProgress]);

  useEffect(() => {
    if (webGLError) return;
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;


    // --- Scene Setup ---
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x030712);
    // Midnight blue to dark fog
    scene.fog = new THREE.FogExp2(0x040817, 0.0075);

    // --- Camera ---
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.5, 1000);
    camera.position.set(0, 45, 120);

    // --- Renderer ---
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance',
      alpha: false,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    // --- Lighting ---
    // Ambient light with midnight blue tint
    const ambientLight = new THREE.AmbientLight(0x1a264a, 0.85);
    scene.add(ambientLight);

    // Directional moonlight / city glow
    const moonLight = new THREE.DirectionalLight(0x7dd3fc, 1.4);
    moonLight.position.set(100, 150, 80);
    scene.add(moonLight);

    // Dramatic red rim light (Spider-Man inspired atmospheric backlight)
    const redRimLight = new THREE.DirectionalLight(0xef4444, 1.8);
    redRimLight.position.set(-80, 50, -60);
    scene.add(redRimLight);

    // Electric cyan street backlight
    const cyanStreetLight = new THREE.PointLight(0x06b6d4, 2.5, 300);
    cyanStreetLight.position.set(0, 10, -50);
    scene.add(cyanStreetLight);

    // --- Procedural Building Window Texture ---
    const createWindowTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 128;
      canvas.height = 256;
      const ctx = canvas.getContext('2d');
      if (!ctx) return new THREE.Texture();

      // Dark concrete facade
      ctx.fillStyle = '#080d1e';
      ctx.fillRect(0, 0, 128, 256);

      const rows = 32;
      const cols = 8;
      const cellW = 128 / cols;
      const cellH = 256 / rows;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const rand = Math.random();
          if (rand > 0.45) {
            // Window is lit
            if (rand > 0.88) {
              ctx.fillStyle = '#38bdf8'; // Electric blue
            } else if (rand > 0.78) {
              ctx.fillStyle = '#f43f5e'; // Restrained crimson
            } else if (rand > 0.68) {
              ctx.fillStyle = '#fbbf24'; // Warm amber
            } else {
              ctx.fillStyle = '#93c5fd'; // Soft cool white
            }
            ctx.fillRect(c * cellW + 2, r * cellH + 2, cellW - 4, cellH - 4);
          } else {
            // Dark window
            ctx.fillStyle = '#03050c';
            ctx.fillRect(c * cellW + 2, r * cellH + 2, cellW - 4, cellH - 4);
          }
        }
      }

      const texture = new THREE.CanvasTexture(canvas);
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      return texture;
    };

    const windowTexture = createWindowTexture();

    // Building materials
    const buildingMaterial = new THREE.MeshStandardMaterial({
      map: windowTexture,
      roughness: 0.35,
      metalness: 0.65,
    });

    const roofMaterial = new THREE.MeshStandardMaterial({
      color: 0x0a1024,
      roughness: 0.8,
      metalness: 0.2,
    });

    const antennaMaterial = new THREE.MeshBasicMaterial({
      color: 0xef4444,
    });

    // --- Build City Canyon ---
    const cityGroup = new THREE.Group();
    scene.add(cityGroup);

    // Skylines & Buildings along a sweeping canyon corridor
    interface BuildingInfo {
      x: number;
      z: number;
      width: number;
      height: number;
      depth: number;
      roofAnchor: THREE.Vector3;
    }

    const buildings: BuildingInfo[] = [];
    const buildingCount = 90;

    for (let i = 0; i < buildingCount; i++) {
      // Position along a path from z = +180 down to z = -320
      const progress = i / buildingCount;
      const zPos = 180 - progress * 500;
      
      // Buildings left and right with a central canyon gap of 40-70 units
      const isLeft = i % 2 === 0;
      const canyonOffset = 28 + Math.random() * 20;
      const xPos = isLeft ? -canyonOffset - Math.random() * 55 : canyonOffset + Math.random() * 55;

      const bWidth = 18 + Math.random() * 24;
      const bDepth = 18 + Math.random() * 24;
      const bHeight = 45 + Math.random() * 85;

      const geom = new THREE.BoxGeometry(bWidth, bHeight, bDepth);
      // Adjust texture repeat to building dimensions
      const mat = buildingMaterial.clone();
      if (mat.map) {
        mat.map = mat.map.clone();
        mat.map.repeat.set(Math.floor(bWidth / 5), Math.floor(bHeight / 6));
        mat.map.needsUpdate = true;
      }

      const buildingMesh = new THREE.Mesh(geom, mat);
      buildingMesh.position.set(xPos, bHeight / 2 - 20, zPos);
      cityGroup.add(buildingMesh);

      // Rooftop ledge cap
      const roofCap = new THREE.Mesh(new THREE.BoxGeometry(bWidth + 1, 2, bDepth + 1), roofMaterial);
      roofCap.position.set(xPos, bHeight - 19, zPos);
      cityGroup.add(roofCap);

      // Random Rooftop Antenna with blinking beacon
      if (Math.random() > 0.4) {
        const antennaHeight = 10 + Math.random() * 16;
        const antenna = new THREE.Mesh(
          new THREE.CylinderGeometry(0.3, 0.5, antennaHeight, 6),
          roofMaterial
        );
        antenna.position.set(xPos, bHeight - 20 + antennaHeight / 2, zPos);
        cityGroup.add(antenna);

        const beacon = new THREE.Mesh(new THREE.SphereGeometry(0.7, 8, 8), antennaMaterial);
        beacon.position.set(xPos, bHeight - 20 + antennaHeight, zPos);
        cityGroup.add(beacon);
      }

      buildings.push({
        x: xPos,
        z: zPos,
        width: bWidth,
        height: bHeight,
        depth: bDepth,
        roofAnchor: new THREE.Vector3(
          xPos + (isLeft ? bWidth / 2 : -bWidth / 2),
          bHeight - 18,
          zPos
        ),
      });
    }

    // Street Ground Level
    const groundGeom = new THREE.PlaneGeometry(800, 1000);
    const groundMat = new THREE.MeshStandardMaterial({
      color: 0x02040a,
      roughness: 0.9,
    });
    const ground = new THREE.Mesh(groundGeom, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -22;
    scene.add(ground);

    // Neon Light Streaks on Street Level (traffic & energy glow)
    const trafficParticles = 140;
    const trafficGeom = new THREE.BufferGeometry();
    const trafficPositions = new Float32Array(trafficParticles * 3);
    const trafficColors = new Float32Array(trafficParticles * 3);

    for (let i = 0; i < trafficParticles; i++) {
      trafficPositions[i * 3] = (Math.random() - 0.5) * 80;
      trafficPositions[i * 3 + 1] = -18 + Math.random() * 5;
      trafficPositions[i * 3 + 2] = 200 - Math.random() * 550;

      const isCyan = Math.random() > 0.5;
      trafficColors[i * 3] = isCyan ? 0.02 : 0.95;
      trafficColors[i * 3 + 1] = isCyan ? 0.74 : 0.25;
      trafficColors[i * 3 + 2] = isCyan ? 0.83 : 0.25;
    }

    trafficGeom.setAttribute('position', new THREE.BufferAttribute(trafficPositions, 3));
    trafficGeom.setAttribute('color', new THREE.BufferAttribute(trafficColors, 3));

    const trafficMat = new THREE.PointsMaterial({
      size: 2.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
    });
    const trafficPoints = new THREE.Points(trafficGeom, trafficMat);
    scene.add(trafficPoints);

    // --- Atmospheric Dust / Web Fiber Particles ---
    const particleCount = 200;
    const dustGeom = new THREE.BufferGeometry();
    const dustPositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      dustPositions[i] = (Math.random() - 0.5) * 200;
      dustPositions[i + 1] = Math.random() * 100;
      dustPositions[i + 2] = 200 - Math.random() * 550;
    }
    dustGeom.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
    const dustMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 1.2,
      transparent: true,
      opacity: 0.45,
    });
    const dustPoints = new THREE.Points(dustGeom, dustMat);
    scene.add(dustPoints);

    // --- Original Masked Web-Slinger Character ---
    const characterGroup = new THREE.Group();
    scene.add(characterGroup);

    // Torso (Super suit with crimson and dark navy panels)
    const torsoMat = new THREE.MeshStandardMaterial({
      color: 0xdc2626, // Vivid superhero red
      roughness: 0.4,
      metalness: 0.3,
    });
    const suitNavyMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a, // Deep midnight navy
      roughness: 0.4,
      metalness: 0.3,
    });
    const lensMat = new THREE.MeshBasicMaterial({
      color: 0xffffff, // White glowing eyes
    });

    const torso = new THREE.Mesh(new THREE.BoxGeometry(1.6, 2.2, 1.1), torsoMat);
    characterGroup.add(torso);

    // Side ribs / dark armor plates
    const leftRib = new THREE.Mesh(new THREE.BoxGeometry(0.3, 2.0, 1.15), suitNavyMat);
    leftRib.position.x = -0.7;
    characterGroup.add(leftRib);

    const rightRib = new THREE.Mesh(new THREE.BoxGeometry(0.3, 2.0, 1.15), suitNavyMat);
    rightRib.position.x = 0.7;
    characterGroup.add(rightRib);

    // Head
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.75, 16, 16), torsoMat);
    head.position.y = 1.7;
    characterGroup.add(head);

    // Mask Lenses (Stylized angular white comic eyes)
    const leftEye = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.22, 0.15), lensMat);
    leftEye.position.set(-0.3, 1.75, 0.7);
    leftEye.rotation.z = -0.2;
    characterGroup.add(leftEye);

    const rightEye = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.22, 0.15), lensMat);
    rightEye.position.set(0.3, 1.75, 0.7);
    rightEye.rotation.z = 0.2;
    characterGroup.add(rightEye);

    // Left Arm (Reaching up to shoot web)
    const leftArmGroup = new THREE.Group();
    leftArmGroup.position.set(-1.0, 0.8, 0);
    const leftArm = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.25, 1.8), torsoMat);
    leftArm.position.y = 0.9;
    leftArmGroup.add(leftArm);
    characterGroup.add(leftArmGroup);

    // Right Arm (Balancing back)
    const rightArmGroup = new THREE.Group();
    rightArmGroup.position.set(1.0, 0.8, 0);
    const rightArm = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.25, 1.8), suitNavyMat);
    rightArm.position.y = 0.9;
    rightArmGroup.add(rightArm);
    characterGroup.add(rightArmGroup);

    // Legs (Athletic bent pose)
    const leftLeg = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.25, 2.2), suitNavyMat);
    leftLeg.position.set(-0.55, -2.0, -0.3);
    leftLeg.rotation.x = -0.4;
    characterGroup.add(leftLeg);

    const rightLeg = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.25, 2.2), torsoMat);
    rightLeg.position.set(0.55, -1.9, 0.3);
    rightLeg.rotation.x = 0.3;
    characterGroup.add(rightLeg);

    // --- Procedural Glowing Web Line ---
    const webMat = new THREE.LineBasicMaterial({
      color: 0x93c5fd, // Electric ice-white
      linewidth: 2,
      transparent: true,
      opacity: 0.95,
    });

    const webGeometry = new THREE.BufferGeometry();
    const webPositions = new Float32Array(30 * 3); // 30 segments for curve
    webGeometry.setAttribute('position', new THREE.BufferAttribute(webPositions, 3));
    const webLine = new THREE.Line(webGeometry, webMat);
    scene.add(webLine);

    // Secondary Web Strand (Shooting to next anchor)
    const secondaryWebMat = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.6,
    });
    const secondaryWebGeom = new THREE.BufferGeometry();
    const secondaryWebPositions = new Float32Array(20 * 3);
    secondaryWebGeom.setAttribute('position', new THREE.BufferAttribute(secondaryWebPositions, 3));
    const secondaryWebLine = new THREE.Line(secondaryWebGeom, secondaryWebMat);
    scene.add(secondaryWebLine);

    // --- Cinematic Camera & Flight Spline ---
    // Smooth Catmull-Rom path weaving between the high-rises
    const cameraWaypoints = [
      new THREE.Vector3(0, 52, 145),   // Scene 1: Rooftop Overlook
      new THREE.Vector3(-12, 38, 95),  // Scene 2: Dive into canyon
      new THREE.Vector3(8, 26, 40),    // Scene 2->3: Low arc swing
      new THREE.Vector3(-15, 34, -20), // Scene 3: Project 1 & 2
      new THREE.Vector3(14, 30, -80),  // Scene 3: Project 3 & 4
      new THREE.Vector3(-10, 36, -140),// Scene 3: Project 5 & 6
      new THREE.Vector3(6, 44, -200),  // Scene 4: Skills vantage platform
      new THREE.Vector3(-4, 56, -260), // Scene 4->5: Ascending climb
      new THREE.Vector3(0, 62, -310),  // Scene 5: Final Rooftop Landing
    ];

    const cameraSpline = new THREE.CatmullRomCurve3(cameraWaypoints);

    // Web Anchor Points on Skyscraper ledges along the route
    const webAnchors = [
      new THREE.Vector3(-28, 65, 110),
      new THREE.Vector3(26, 55, 60),
      new THREE.Vector3(-32, 60, 5),
      new THREE.Vector3(28, 52, -55),
      new THREE.Vector3(-25, 58, -115),
      new THREE.Vector3(30, 64, -175),
      new THREE.Vector3(-24, 72, -235),
      new THREE.Vector3(20, 78, -285),
    ];

    // --- Mouse Parallax Handler ---
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = (e.clientX / width - 0.5) * 2;
      mouseRef.current.targetY = (e.clientY / height - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // --- Resize Handler ---
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // --- Render Loop ---
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();


      // Smooth scroll interpolation
      const lerpFactor = reducedMotion ? 0.3 : 0.08;
      currentScrollRef.current += (targetScrollRef.current - currentScrollRef.current) * lerpFactor;
      const t = Math.max(0, Math.min(1, currentScrollRef.current));

      // Smooth mouse follow
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      // 1. Camera Position along Spline
      const camPos = cameraSpline.getPointAt(t);
      const camLookTarget = cameraSpline.getPointAt(Math.min(1, t + 0.04));

      // Add subtle mouse parallax to camera
      camera.position.set(
        camPos.x + mouseRef.current.x * 2.5,
        camPos.y - mouseRef.current.y * 1.5,
        camPos.z
      );

      // Camera Banking (tilt into turns)
      const tangent = cameraSpline.getTangentAt(t);
      const banking = tangent.x * 0.45;
      camera.rotation.z = THREE.MathUtils.lerp(camera.rotation.z, -banking, 0.1);

      camera.lookAt(camLookTarget.x, camLookTarget.y - 1.5, camLookTarget.z);

      // 2. Character Position & Swings
      // Character flies ahead of camera in the canyon
      const charPos = cameraSpline.getPointAt(Math.min(1, t + 0.025));

      // Pendulum swing calculation
      const swingFreq = 16.0;
      const swingPhase = t * swingFreq;
      const swingPendulum = Math.sin(swingPhase);

      // Vertical bounce during swing arcs
      const arcDip = Math.abs(Math.sin(swingPhase)) * 3.5;

      if (t < 0.06) {
        // Scene 1: Crouched on rooftop ledge
        characterGroup.position.set(0, 48.5, 126);
        characterGroup.rotation.set(0.2, 0, 0);
        characterGroup.scale.setScalar(1);

        leftArmGroup.rotation.set(-0.2, 0, 0);
        rightArmGroup.rotation.set(0.2, 0, 0);
      } else if (t > 0.92) {
        // Scene 5: Landed heroically on final rooftop
        characterGroup.position.set(0, 58.2, -305);
        characterGroup.rotation.set(0.1, Math.PI, 0);
        characterGroup.scale.setScalar(1);

        leftArmGroup.rotation.set(0.1, 0, 0);
        rightArmGroup.rotation.set(-0.1, 0, 0);
      } else {
        // Active Mid-Air Web-Swinging
        const swayX = swingPendulum * 4.5;
        characterGroup.position.set(
          charPos.x + swayX,
          charPos.y - arcDip - 1.0,
          charPos.z
        );

        // Body Banking into the swing arc
        characterGroup.rotation.z = -swingPendulum * 0.55;
        characterGroup.rotation.x = 0.35 + Math.sin(elapsedTime * 4) * 0.05;
        characterGroup.rotation.y = tangent.x * 0.8;

        // Dynamic Arm Movement (shooting and stabilizing)
        leftArmGroup.rotation.x = -1.6 + swingPendulum * 0.3; // Reaching up
        leftArmGroup.rotation.z = 0.3 + swingPendulum * 0.4;
        rightArmGroup.rotation.x = 0.6 - swingPendulum * 0.4; // Trailing back
      }

      // 3. Procedural Web Line Generation
      // Choose anchor based on scroll timeline
      const anchorIdx = Math.min(
        webAnchors.length - 1,
        Math.floor(t * webAnchors.length)
      );
      const activeAnchor = webAnchors[anchorIdx];

      const shooterWorldPos = new THREE.Vector3();
      leftArmGroup.getWorldPosition(shooterWorldPos);

      // Curve from wrist to building anchor with realistic catenary dip
      const webCurve = new THREE.QuadraticBezierCurve3(
        shooterWorldPos,
        new THREE.Vector3(
          (shooterWorldPos.x + activeAnchor.x) / 2 + (swingPendulum * 1.5),
          (shooterWorldPos.y + activeAnchor.y) / 2 - 2.5, // sag under tension
          (shooterWorldPos.z + activeAnchor.z) / 2
        ),
        activeAnchor
      );

      const webPoints = webCurve.getPoints(29);
      const posAttr = webGeometry.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < webPoints.length; i++) {
        posAttr.setXYZ(i, webPoints[i].x, webPoints[i].y, webPoints[i].z);
      }
      posAttr.needsUpdate = true;

      // Visibility of web strand: hidden on rooftop perch, taut during flight
      if (t < 0.05 || t > 0.94) {
        webMat.opacity = 0;
      } else {
        webMat.opacity = 0.95;
      }

      // 4. Secondary Pre-Cast Web Strand
      const nextAnchorIdx = Math.min(webAnchors.length - 1, anchorIdx + 1);
      const nextAnchor = webAnchors[nextAnchorIdx];
      const secPositions = secondaryWebGeom.attributes.position as THREE.BufferAttribute;
      
      for (let i = 0; i < 20; i++) {
        const factor = i / 19;
        const x = THREE.MathUtils.lerp(shooterWorldPos.x, nextAnchor.x, factor);
        const y = THREE.MathUtils.lerp(shooterWorldPos.y, nextAnchor.y, factor);
        const z = THREE.MathUtils.lerp(shooterWorldPos.z, nextAnchor.z, factor);
        secPositions.setXYZ(i, x, y, z);
      }
      secPositions.needsUpdate = true;
      secondaryWebMat.opacity = Math.abs(swingPendulum) > 0.6 && t > 0.08 && t < 0.9 ? 0.65 : 0;

      // Subtle atmospheric dust drift
      dustPoints.rotation.y = elapsedTime * 0.015;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    // --- Cleanup ---
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      buildingMaterial.dispose();
      roofMaterial.dispose();
      antennaMaterial.dispose();
      webMat.dispose();
      secondaryWebMat.dispose();
      webGeometry.dispose();
      secondaryWebGeom.dispose();
    };
  }, [reducedMotion, webGLError]);


  if (webGLError) {
    // Graceful CSS Fallback
    return (
      <div className="fixed inset-0 pointer-events-none z-0 bg-gradient-to-b from-[#030712] via-[#090e24] to-[#030712] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(14,165,233,0.15),transparent_60%)]" />
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
};
