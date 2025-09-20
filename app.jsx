<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team7 Agency - Digital Excellence</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
            --secondary-gradient: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
            --dark-bg: #0a0b1e;
            --darker-bg: #050614;
            --text-primary: #ffffff;
            --text-secondary: #8892b0;
            --accent-purple: #764ba2;
            --accent-blue: #4facfe;
        }

        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            background: var(--dark-bg);
            color: var(--text-primary);
            overflow-x: hidden;
            line-height: 1.6;
        }

        /* Animated Background */
        .bg-animation {
            position: fixed;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            z-index: -1;
            background: radial-gradient(ellipse at top, #1a1e3a 0%, var(--darker-bg) 60%);
        }

        .bg-animation::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(118, 75, 162, 0.1) 0%, transparent 70%);
            animation: rotate 30s linear infinite;
        }

        @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }

        /* Navigation */
        nav {
            position: fixed;
            top: 0;
            width: 100%;
            padding: 20px 50px;
            background: rgba(10, 11, 30, 0.8);
            backdrop-filter: blur(10px);
            z-index: 1000;
            animation: slideDown 0.5s ease-out;
        }

        @keyframes slideDown {
            from {
                transform: translateY(-100%);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }

        .nav-container {
            max-width: 1400px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-size: 24px;
            font-weight: bold;
            background: var(--primary-gradient);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: glow 2s ease-in-out infinite alternate;
        }

        @keyframes glow {
            from { filter: drop-shadow(0 0 2px rgba(118, 75, 162, 0.5)); }
            to { filter: drop-shadow(0 0 8px rgba(118, 75, 162, 0.8)); }
        }

        .nav-links {
            display: flex;
            list-style: none;
            gap: 40px;
            align-items: center;
        }

        .nav-links a {
            color: var(--text-secondary);
            text-decoration: none;
            transition: all 0.3s ease;
            position: relative;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .nav-links a::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background: var(--primary-gradient);
            transition: width 0.3s ease;
        }

        .nav-links a:hover {
            color: var(--text-primary);
        }

        .nav-links a:hover::after {
            width: 100%;
        }

        .cta-button {
            padding: 10px 24px;
            background: var(--primary-gradient);
            border: none;
            border-radius: 50px;
            color: white;
            cursor: pointer;
            transition: all 0.3s ease;
            text-transform: uppercase;
            font-size: 12px;
            letter-spacing: 1px;
            font-weight: 600;
        }

        .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 30px rgba(118, 75, 162, 0.4);
        }

        /* Hero Section */
        .hero {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 100px 50px 50px;
            position: relative;
        }

        .hero-content {
            text-align: center;
            max-width: 900px;
            animation: fadeInUp 1s ease-out;
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .hero-subtitle {
            color: var(--text-secondary);
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 3px;
            margin-bottom: 20px;
            animation: fadeInUp 1s ease-out 0.2s backwards;
        }

        .hero h1 {
            font-size: clamp(40px, 8vw, 80px);
            font-weight: 900;
            margin-bottom: 20px;
            line-height: 1.1;
            animation: fadeInUp 1s ease-out 0.4s backwards;
        }

        .gradient-text {
            background: var(--primary-gradient);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            display: inline-block;
        }

        .hero-description {
            color: var(--text-secondary);
            font-size: 18px;
            margin-bottom: 40px;
            animation: fadeInUp 1s ease-out 0.6s backwards;
        }

        /* 3D Layers */
        .layers-container {
            position: relative;
            width: 600px;
            height: 400px;
            margin: 60px auto;
            perspective: 1000px;
            animation: fadeInUp 1s ease-out 0.8s backwards;
        }

        .layer {
            position: absolute;
            width: 400px;
            height: 100px;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 600;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 1px;
            transition: all 0.5s ease;
            cursor: pointer;
        }

        .layer-1 {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            transform: translate(-50%, -50%) translateZ(100px) translateY(-80px);
            box-shadow: 0 20px 40px rgba(118, 75, 162, 0.3);
        }

        .layer-2 {
            background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
            transform: translate(-50%, -50%) translateZ(50px);
            box-shadow: 0 20px 40px rgba(79, 172, 254, 0.3);
        }

        .layer-3 {
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            transform: translate(-50%, -50%) translateZ(0px) translateY(80px);
            box-shadow: 0 20px 40px rgba(240, 147, 251, 0.3);
        }

        .layer:hover {
            transform: translate(-50%, -50%) translateZ(120px) scale(1.05);
        }

        /* Service Cards */
        .services {
            padding: 100px 50px;
            max-width: 1400px;
            margin: 0 auto;
        }

        .section-title {
            text-align: center;
            font-size: 48px;
            margin-bottom: 60px;
            font-weight: 800;
        }

        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
        }

        .service-card {
            background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 20px;
            padding: 40px 30px;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .service-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background: var(--primary-gradient);
            transform: translateX(-100%);
            transition: transform 0.5s ease;
        }

        .service-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(118, 75, 162, 0.2);
        }

        .service-card:hover::before {
            transform: translateX(0);
        }

        .service-icon {
            width: 60px;
            height: 60px;
            background: var(--primary-gradient);
            border-radius: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            margin-bottom: 20px;
        }

        .service-card h3 {
            font-size: 24px;
            margin-bottom: 15px;
        }

        .service-card p {
            color: var(--text-secondary);
            line-height: 1.6;
        }

        /* Stats Section */
        .stats {
            padding: 80px 50px;
            background: rgba(255,255,255,0.02);
        }

        .stats-container {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 40px;
            text-align: center;
        }

        .stat-item {
            animation: fadeInUp 1s ease-out;
        }

        .stat-number {
            font-size: 48px;
            font-weight: 900;
            background: var(--primary-gradient);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 10px;
        }

        .stat-label {
            color: var(--text-secondary);
            text-transform: uppercase;
            letter-spacing: 2px;
            font-size: 12px;
        }

        /* Team Section */
        .team {
            padding: 100px 50px;
            max-width: 1400px;
            margin: 0 auto;
        }

        .team-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 30px;
            margin-top: 60px;
        }

        .team-member {
            text-align: center;
            transition: transform 0.3s ease;
        }

        .team-member:hover {
            transform: translateY(-10px);
        }

        .member-avatar {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            background: var(--primary-gradient);
            margin: 0 auto 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 48px;
            font-weight: bold;
            position: relative;
            overflow: hidden;
        }

        .member-avatar::before {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            background: var(--primary-gradient);
            border-radius: 50%;
            z-index: -1;
            animation: rotate 3s linear infinite;
        }

        .member-name {
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 5px;
        }

        .member-role {
            color: var(--text-secondary);
            font-size: 14px;
        }

        /* Footer */
        footer {
            padding: 50px;
            text-align: center;
            border-top: 1px solid rgba(255,255,255,0.1);
            margin-top: 100px;
        }

        .footer-content {
            max-width: 1200px;
            margin: 0 auto;
        }

        .social-links {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-top: 30px;
        }

        .social-link {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: rgba(255,255,255,0.1);
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            color: var(--text-secondary);
        }

        .social-link:hover {
            background: var(--primary-gradient);
            transform: translateY(-3px);
            color: white;
        }

        /* Responsive */
        @media (max-width: 768px) {
            nav {
                padding: 15px 20px;
            }

            .nav-links {
                display: none;
            }

            .hero {
                padding: 100px 20px 50px;
            }

            .layers-container {
                width: 100%;
                height: 300px;
            }

            .layer {
                width: 280px;
                height: 80px;
                font-size: 12px;
            }

            .services, .team {
                padding: 60px 20px;
            }

            .section-title {
                font-size: 32px;
            }
        }
    </style>
</head>
<body>
    <div class="bg-animation"></div>

    <!-- Navigation -->
    <nav>
        <div class="nav-container">
            <div class="logo">TEAM7</div>
            <ul class="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#about">About</a></li>
                <li><button class="cta-button">Get Started</button></li>
            </ul>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero" id="home">
        <div class="hero-content">
            <p class="hero-subtitle">Welcome to Team7 Agency</p>
            <h1>Crafting Your <span class="gradient-text">Perfect</span><br>Digital Solutions</h1>
            <p class="hero-description">
                We transform ideas into exceptional digital experiences through<br>
                innovative design and cutting-edge development
            </p>

            <!-- 3D Layers Visualization -->
            <div class="layers-container">
                <div class="layer layer-1">Strategy & Planning</div>
                <div class="layer layer-2">Design & Development</div>
                <div class="layer layer-3">Launch & Growth</div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section class="services" id="services">
        <h2 class="section-title">Our <span class="gradient-text">Services</span></h2>
        <div class="services-grid">
            <div class="service-card">
                <div class="service-icon">🚀</div>
                <h3>Web Development</h3>
                <p>Building fast, scalable, and modern web applications using the latest technologies and best practices.</p>
            </div>
            <div class="service-card">
                <div class="service-icon">🎨</div>
                <h3>UI/UX Design</h3>
                <p>Creating intuitive and beautiful interfaces that provide exceptional user experiences across all devices.</p>
            </div>
            <div class="service-card">
                <div class="service-icon">📱</div>
                <h3>Mobile Apps</h3>
                <p>Developing native and cross-platform mobile applications that engage users and drive business growth.</p>
            </div>
            <div class="service-card">
                <div class="service-icon">💡</div>
                <h3>Digital Strategy</h3>
                <p>Crafting comprehensive digital strategies that align with your business goals and market opportunities.</p>
            </div>
            <div class="service-card">
                <div class="service-icon">🔍</div>
                <h3>SEO & Marketing</h3>
                <p>Optimizing your digital presence to increase visibility, traffic, and conversions across all channels.</p>
            </div>
            <div class="service-card">
                <div class="service-icon">☁️</div>
                <h3>Cloud Solutions</h3>
                <p>Implementing scalable cloud infrastructure and services to support your growing business needs.</p>
            </div>
        </div>
    </section>

    <!-- Stats Section -->
    <section class="stats">
        <div class="stats-container">
            <div class="stat-item">
                <div class="stat-number">150+</div>
                <div class="stat-label">Projects Completed</div>
            </div>
            <div class="stat-item">
                <div class="stat-number">50+</div>
                <div class="stat-label">Happy Clients</div>
            </div>
            <div class="stat-item">
                <div class="stat-number">7</div>
                <div class="stat-label">Expert Members</div>
            </div>
            <div class="stat-item">
                <div class="stat-number">5★</div>
                <div class="stat-label">Average Rating</div>
            </div>
        </div>
    </section>

    <!-- Team Section -->
    <section class="team" id="about">
        <h2 class="section-title">Meet <span class="gradient-text">Team7</span></h2>
        <div class="team-grid">
            <div class="team-member">
                <div class="member-avatar">A</div>
                <div class="member-name">Alex Chen</div>
                <div class="member-role">Lead Developer</div>
            </div>
            <div class="team-member">
                <div class="member-avatar">S</div>
                <div class="member-name">Sarah Kim</div>
                <div class="member-role">UI/UX Designer</div>
            </div>
            <div class="team-member">
                <div class="member-avatar">M</div>
                <div class="member-name">Mike Johnson</div>
                <div class="member-role">Project Manager</div>
            </div>
            <div class="team-member">
                <div class="member-avatar">E</div>
                <div class="member-name">Emma Davis</div>
                <div class="member-role">Marketing Lead</div>
            </div>
            <div class="team-member">
                <div class="member-avatar">D</div>
                <div class="member-name">David Lee</div>
                <div class="member-role">Backend Engineer</div>
            </div>
            <div class="team-member">
                <div class="member-avatar">L</div>
                <div class="member-name">Lisa Wang</div>
                <div class="member-role">Frontend Developer</div>
            </div>
            <div class="team-member">
                <div class="member-avatar">J</div>
                <div class="member-name">James Park</div>
                <div class="member-role">DevOps Engineer</div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="footer-content">
            <div class="logo">TEAM7</div>
            <p style="color: var(--text-secondary); margin-top: 20px;">
                © 2025 Team7 Agency. Crafting digital excellence.
            </p>
            <div class="social-links">
                <a href="#" class="social-link">📧</a>
                <a href="#" class="social-link">💼</a>
                <a href="#" class="social-link">🐦</a>
                <a href="#" class="social-link">📷</a>
            </div>
        </div>
    </footer>

    <script>
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        // Parallax effect for layers on mouse move
        const layersContainer = document.querySelector('.layers-container');
        if (layersContainer) {
            layersContainer.addEventListener('mousemove', (e) => {
                const rect = layersContainer.getBoundingClientRect();
                const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
                const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
                
                document.querySelectorAll('.layer').forEach((layer, index) => {
                    const depth = (index + 1) * 20;
                    layer.style.transform = `
                        translate(-50%, -50%) 
                        translateX(${x * depth}px) 
                        translateY(${y * depth + (index - 1) * 80}px)
                        translateZ(${50 * (2 - index)}px)
                    `;
                });
            });

            layersContainer.addEventListener('mouseleave', () => {
                document.querySelector('.layer-1').style.transform = 'translate(-50%, -50%) translateZ(100px) translateY(-80px)';
                document.querySelector('.layer-2').style.transform = 'translate(-50%, -50%) translateZ(50px)';
                document.querySelector('.layer-3').style.transform = 'translate(-50%, -50%) translateZ(0px) translateY(80px)';
            });
        }

        // Animate stats on scroll
        const animateStats = () => {
            const stats = document.querySelectorAll('.stat-number');
            stats.forEach(stat => {
                const target = parseInt(stat.innerText);
                if (!isNaN(target)) {
                    let current = 0;
                    const increment = target / 50;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            stat.innerText = target + '+';
                            clearInterval(timer);
                        } else {
                            stat.innerText = Math.floor(current) + '+';
                        }
                    }, 30);
                }
            });
        };

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.3,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    
                    if (entry.target.classList.contains('stats-container')) {
                        animateStats();
                    }
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.querySelectorAll('.service-card, .team-member').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.6s ease';
            observer.observe(el);
        });

        const statsContainer = document.querySelector('.stats-container');
        if (statsContainer) {
            observer.observe(statsContainer);
        }

        // Typing effect for hero subtitle
        const subtitle = document.querySelector('.hero-subtitle');
        if (subtitle) {
            const text = subtitle.innerText;
            subtitle.innerText = '';
            let i = 0;
            const typeWriter = () => {
                if (i < text.length) {
                    subtitle.innerText += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 50);
                }
            };
            setTimeout(typeWriter, 500);
        }
    </script>
</body>
</html>
