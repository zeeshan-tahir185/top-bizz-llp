"use client";
import Link from 'next/link';
import React, { useEffect } from 'react';

const HomePage = () => {
useEffect(() => {
  const cleanups = [];

  // =========================
  // Mobile Menu Functionality
  // =========================
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navMenu = document.getElementById('navMenu');

  if (mobileMenuBtn && navMenu) {
    const handleMenuClick = () => {
      navMenu.classList.toggle('active');
    };
    mobileMenuBtn.addEventListener('click', handleMenuClick);
    cleanups.push(() => mobileMenuBtn.removeEventListener('click', handleMenuClick));
  }

  // =========================
  // Role Tabs Functionality
  // =========================
  const roleTabs = document.querySelectorAll('.role-tab');
  const roleContents = document.querySelectorAll('.role-content');

  roleTabs.forEach((tab) => {
    const handleTabClick = () => {
      roleTabs.forEach((t) => t.classList.remove('active'));
      roleContents.forEach((c) => c.classList.remove('active'));

      tab.classList.add('active');
      const role = tab.getAttribute('data-role');
      const content = document.getElementById(`${role}-content`);
      if (content) {
        content.classList.add('active');
      }
    };
    tab.addEventListener('click', handleTabClick);
    cleanups.push(() => tab.removeEventListener('click', handleTabClick));
  });

  // =========================
  // FAQ Accordion
  // =========================
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    const question = item.querySelector('.faq-question');
    if (question) {
      const handleQuestionClick = () => {
        faqItems.forEach((otherItem) => {
          if (otherItem !== item) otherItem.classList.remove('active');
        });
        item.classList.toggle('active');
      };
      question.addEventListener('click', handleQuestionClick);
      cleanups.push(() => question.removeEventListener('click', handleQuestionClick));
    }
  });

  // =========================
  // Form Submission
  // =========================
  const demoForm = document.getElementById('demoForm');
  if (demoForm) {
    const handleSubmit = (e) => {
      e.preventDefault();
      alert('Thank you for your interest! We will contact you soon to schedule a demonstration.');
      demoForm.reset();
    };
    demoForm.addEventListener('submit', handleSubmit);
    cleanups.push(() => demoForm.removeEventListener('submit', handleSubmit));
  }

  // =========================
  // Smooth Scrolling
  // =========================
  const anchors = document.querySelectorAll('a[href^="#"]');
  anchors.forEach((anchor) => {
    const handleAnchorClick = (e) => {
      e.preventDefault();
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth',
        });
        if (navMenu) navMenu.classList.remove('active');
      }
    };
    anchor.addEventListener('click', handleAnchorClick);
    cleanups.push(() => anchor.removeEventListener('click', handleAnchorClick));
  });

  // =========================
  // Cleanup on Unmount
  // =========================
  return () => {
    cleanups.forEach((cleanup) => cleanup());
  };
}, []);

  return (
    <div>
    <header>
        <div className="container header-container">
            <div className="logo">
                <div className="logo-icon">
                    <i className="fas fa-graduation-cap"></i>
                </div>
                <div className="logo-text">STEM<span>LMS</span></div>
            </div>
            <button className="mobile-menu-btn" id="mobileMenuBtn">
                <i className="fas fa-bars"></i>
            </button>
            <nav>
                <ul id="navMenu">
                    <li className='flex justify-center items-center'><a href="#features">Features</a></li>
                    <li className='flex justify-center items-center'><a href="#roles">User Roles</a></li>
                    <li className='flex justify-center items-center'><a href="#technical">Technical Specs</a></li>
                    <li className='flex justify-center items-center'><a href="#training">Training</a></li>
                    <li className='flex justify-center items-center'><a href="#security">Security</a></li>
                    <li className='flex justify-center items-center'><a href="#contact" className="btn btn-primary">Contact Us</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <section className="hero">
        <div className="container">
            <div className="hero-content">
                <h1>Transform STEM Education with Our Comprehensive LMS</h1>
                <p>A standardized, bilingual platform designed for Pakistan's STEM institutions - bridging educational gaps with advanced technology and accessible learning tools.</p>
                <div className="hero-btns">
                    <a href="#contact" className="btn btn-primary pulse">
                        <i className="fas fa-play-circle"></i> Request Demo
                    </a>
                    <a href="#features" className="btn btn-light">
                        <i className="fas fa-search"></i> Explore Features
                    </a>
                </div>
                <div className="hero-stats">
                    <div className="stat">
                        <div className="stat-number">500+</div>
                        <div className="stat-label">Training Modules</div>
                    </div>
                    <div className="stat">
                        <div className="stat-number">24/7</div>
                        <div className="stat-label">Uptime Guarantee</div>
                    </div>
                    <div className="stat">
                        <div className="stat-number">Bilingual</div>
                        <div className="stat-label">English & Urdu Support</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="partners">
        <div className="container">
            <h3>In Partnership With</h3>
            <div className="partners-grid">
                <div className="partner-logo">Pakistan Science Foundation</div>
                <div className="partner-logo">Ministry of Science & Technology</div>
                <div className="partner-logo">Top Biz LLP</div>
            </div>
        </div>
    </section>

    <section id="features" className="section section-light">
        <div className="container">
            <h2 className="text-center centered">Key Features & Benefits</h2>
            <p className="text-center mb-5">Our STEM LMS is designed to address critical educational challenges with a comprehensive set of features that enhance learning, teaching, and administration.</p>
            
            <div className="features-grid">
                <div className="feature-card">
                    <div className="feature-icon">
                        <i className="fas fa-language"></i>
                    </div>
                    <h3>Bilingual Interface</h3>
                    <p>Full support for English and Urdu with easy toggle functionality. Designed for future expansion to regional languages like Sindhi and Pashto without system redesign.</p>
                </div>
                
                <div className="feature-card">
                    <div className="feature-icon">
                        <i className="fas fa-user-tie"></i>
                    </div>
                    <h3>Role-Based Dashboards</h3>
                    <p>Custom interfaces for Students, Teachers, Admins, Principals, and STEM Officials with tailored workflows and access controls for optimized user experience.</p>
                </div>
                
                <div className="feature-card">
                    <div className="feature-icon">
                        <i className="fas fa-wifi"></i>
                    </div>
                    <h3>Offline Compatibility</h3>
                    <p>Key functions remain available in low-connectivity areas with automatic synchronization when back online. Perfect for remote regions like Baluchistan and rural Sindh.</p>
                </div>
                
                <div className="feature-card">
                    <div className="feature-icon">
                        <i className="fas fa-chart-line"></i>
                    </div>
                    <h3>Real-time Monitoring</h3>
                    <p>Comprehensive dashboards and analytics for performance tracking, institutional oversight, and data-driven decision making at all levels.</p>
                </div>
                
                <div className="feature-card">
                    <div className="feature-icon">
                        <i className="fas fa-clipboard-check"></i>
                    </div>
                    <h3>Advanced Assessment Tools</h3>
                    <p>Robust evaluation system with quizzes, assignments, auto-grading, and manual grading dashboards for continuous student assessment and feedback.</p>
                </div>
                
                <div className="feature-card">
                    <div className="feature-icon">
                        <i className="fas fa-shield-alt"></i>
                    </div>
                    <h3>Enterprise Security</h3>
                    <p>Military-grade security with encryption, automated backups, disaster recovery protocols, and compliance with data protection standards.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="roles" className="section section-alt custom_roles">
        <div className="container">
            <h2 className="text-center centered">Tailored Experiences for Every User</h2>
            <p className="text-center mb-5">Our LMS provides customized interfaces and tools designed for specific user roles and responsibilities within the educational ecosystem.</p>
            
            <div className="roles-container">
                <div className="role-tabs">
                    <div className="role-tab active" data-role="student">
                        <i className="fas fa-user-graduate"></i> Students
                    </div>
                    <div className="role-tab" data-role="teacher">
                        <i className="fas fa-chalkboard-teacher"></i> Teachers
                    </div>
                    <div className="role-tab" data-role="admin">
                        <i className="fas fa-user-cog"></i> Administrators
                    </div>
                    <div className="role-tab" data-role="principal">
                        <i className="fas fa-user-tie"></i> Principals
                    </div>
                    <div className="role-tab" data-role="official">
                        <i className="fas fa-users-cog"></i> STEM Officials
                    </div>
                </div>
                
                <div className="role-content active" id="student-content">
                    <div className="role-header">
                        <div className="role-icon">
                            <i className="fas fa-user-graduate"></i>
                        </div>
                        <div className="role-title">
                            <Link href="/student-dashboard"><h3>Student Dashboard</h3></Link>
                            <p>Personalized learning experience with tools to manage coursework, track progress, and access educational resources anytime, anywhere.</p>
                        </div>
                    </div>
                    
                    <div className="role-features">
                        <div className="role-feature">
                            <div className="feature-icon-small">
                                <i className="fas fa-book-open"></i>
                            </div>
                            <div className="feature-content">
                                <h4>Course Management</h4>
                                <p>View enrolled courses, upcoming classes, assignments, and academic calendar with intuitive navigation.</p>
                            </div>
                        </div>
                        
                        <div className="role-feature">
                            <div className="feature-icon-small">
                                <i className="fas fa-chart-line"></i>
                            </div>
                            <div className="feature-content">
                                <h4>Performance Tracking</h4>
                                <p>Monitor grades, attendance records, merit list status, and progress analytics with visual dashboards.</p>
                            </div>
                        </div>
                        
                        <div className="role-feature">
                            <div className="feature-icon-small">
                                <i className="fas fa-download"></i>
                            </div>
                            <div className="feature-content">
                                <h4>Offline Access</h4>
                                <p>Download lectures, assignments, and quizzes for offline use in low-connectivity areas with auto-sync when online.</p>
                            </div>
                        </div>
                        
                        <div className="role-feature">
                            <div className="feature-icon-small">
                                <i className="fas fa-bell"></i>
                            </div>
                            <div className="feature-content">
                                <h4>Smart Notifications</h4>
                                <p>Receive real-time alerts for classes, results, deadlines, and institute announcements via email and SMS.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="role-benefits">
                        <h4>Key Benefits for Students:</h4>
                        <div className="benefits-list">
                            <div className="benefit-item">
                                <i className="fas fa-check-circle"></i>
                                <span>Personalized learning paths</span>
                            </div>
                            <div className="benefit-item">
                                <i className="fas fa-check-circle"></i>
                                <span>24/7 access to learning materials</span>
                            </div>
                            <div className="benefit-item">
                                <i className="fas fa-check-circle"></i>
                                <span>Interactive assessment tools</span>
                            </div>
                            <div className="benefit-item">
                                <i className="fas fa-check-circle"></i>
                                <span>Progress tracking and analytics</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="role-content" id="teacher-content">
                    <div className="role-header">
                        <div className="role-icon">
                            <i className="fas fa-chalkboard-teacher"></i>
                        </div>
                        <div className="role-title">
                            <Link href="/teacher-dashboard"><h3>Teacher Interface</h3></Link>
                            <p>Comprehensive tools for course management, student assessment, communication, and performance tracking to enhance teaching effectiveness.</p>
                        </div>
                    </div>
                    
                    <div className="role-features">
                        <div className="role-feature">
                            <div className="feature-icon-small">
                                <i className="fas fa-book"></i>
                            </div>
                            <div className="feature-content">
                                <h4>Course Management</h4>
                                <p>Create and update course outlines, upload learning resources, schedule lectures and labs with flexible timing options.</p>
                            </div>
                        </div>
                        
                        <div className="role-feature">
                            <div className="feature-icon-small">
                                <i className="fas fa-tasks"></i>
                            </div>
                            <div className="feature-content">
                                <h4>Assessment Tools</h4>
                                <p>Create assignments, quizzes with auto-grading features, and manual grading dashboard for comprehensive evaluation.</p>
                            </div>
                        </div>
                        
                        <div className="role-feature">
                            <div className="feature-icon-small">
                                <i className="fas fa-user-check"></i>
                            </div>
                            <div className="feature-content">
                                <h4>Attendance Management</h4>
                                <p>Mark attendance online/offline with automatic synchronization and detailed reporting for administrative compliance.</p>
                            </div>
                        </div>
                        
                        <div className="role-feature">
                            <div className="feature-icon-small">
                                <i className="fas fa-chart-pie"></i>
                            </div>
                            <div className="feature-content">
                                <h4>Student Monitoring</h4>
                                <p>Track performance, progress analytics, participation levels, and identify at-risk students with early intervention tools.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="role-benefits">
                        <h4>Key Benefits for Teachers:</h4>
                        <div className="benefits-list">
                            <div className="benefit-item">
                                <i className="fas fa-check-circle"></i>
                                <span>Streamlined course management</span>
                            </div>
                            <div className="benefit-item">
                                <i className="fas fa-check-circle"></i>
                                <span>Automated grading and assessment</span>
                            </div>
                            <div className="benefit-item">
                                <i className="fas fa-check-circle"></i>
                                <span>Comprehensive student analytics</span>
                            </div>
                            <div className="benefit-item">
                                <i className="fas fa-check-circle"></i>
                                <span>Enhanced communication tools</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="role-content" id="admin-content">
                    <div className="role-header">
                        <div className="role-icon">
                            <i className="fas fa-user-cog"></i>
                        </div>
                        <div className="role-title">
                            <Link href="/admin-dashboard"><h3>Administrator Dashboard</h3></Link>
                            <p>Centralized control panel for managing institutional operations, user accounts, system configuration, and comprehensive reporting.</p>
                        </div>
                    </div>
                    
                    <div className="role-features">
                        <div className="role-feature">
                            <div className="feature-icon-small">
                                <i className="fas fa-users"></i>
                            </div>
                            <div className="feature-content">
                                <h4>User Management</h4>
                                <p>Add, edit, and manage students, teachers, staff, and principals with role-based permissions and access controls.</p>
                            </div>
                        </div>
                        
                        <div className="role-feature">
                            <div className="feature-icon-small">
                                <i className="fas fa-clipboard-list"></i>
                            </div>
                            <div className="feature-content">
                                <h4>Admissions Oversight</h4>
                                <p>Verify documents, approve/reject applications, manage merit lists, and streamline the entire admissions process.</p>
                            </div>
                        </div>
                        
                        <div className="role-feature">
                            <div className="feature-icon-small">
                                <i className="fas fa-cogs"></i>
                            </div>
                            <div className="feature-content">
                                <h4>System Configuration</h4>
                                <p>Manage institutional themes, language settings, branding elements, and customize system parameters.</p>
                            </div>
                        </div>
                        
                        <div className="role-feature">
                            <div className="feature-icon-small">
                                <i className="fas fa-chart-bar"></i>
                            </div>
                            <div className="feature-content">
                                <h4>Reports & Analytics</h4>
                                <p>Generate comprehensive reports on admissions, academics, finances, and usage statistics with export capabilities.</p>
                            </div>
                        </div>
                        
                        <div className="role-feature">
                            <div className="feature-icon-small">
                                <i className="fas fa-bell"></i>
                            </div>
                            <div className="feature-content">
                                <h4>Notifications Control</h4>
                                <p>Manage email/SMS gateway settings, configure automated alerts, and control notification workflows.</p>
                            </div>
                        </div>
                        
                        <div className="role-feature">
                            <div className="feature-icon-small">
                                <i className="fas fa-tachometer-alt"></i>
                            </div>
                            <div className="feature-content">
                                <h4>SLA Monitoring</h4>
                                <p>Monitor system performance with dashboards showing load times, uptime statistics, and error logs.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="role-benefits">
                        <h4>Key Benefits for Administrators:</h4>
                        <div className="benefits-list">
                            <div className="benefit-item">
                                <i className="fas fa-check-circle"></i>
                                <span>Centralized user management</span>
                            </div>
                            <div className="benefit-item">
                                <i className="fas fa-check-circle"></i>
                                <span>Streamlined admissions process</span>
                            </div>
                            <div className="benefit-item">
                                <i className="fas fa-check-circle"></i>
                                <span>Customizable system configuration</span>
                            </div>
                            <div className="benefit-item">
                                <i className="fas fa-check-circle"></i>
                                <span>Comprehensive reporting tools</span>
                            </div>
                            <div className="benefit-item">
                                <i className="fas fa-check-circle"></i>
                                <span>Performance monitoring dashboards</span>
                            </div>
                            <div className="benefit-item">
                                <i className="fas fa-check-circle"></i>
                                <span>Automated notification systems</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="role-content" id="principal-content">
                    <div className="role-header">
                        <div className="role-icon">
                            <i className="fas fa-user-tie"></i>
                        </div>
                        <div className="role-title">
                            <Link href="/principal-dashboard"><h3>Principal Dashboard</h3></Link>
                            <p>Strategic oversight tools for institutional management, academic performance monitoring, and administrative decision-making.</p>
                        </div>
                    </div>
                    
                    <div className="role-features">
                        <div className="role-feature">
                            <div className="feature-icon-small">
                                <i className="fas fa-tachometer-alt"></i>
                            </div>
                            <div className="feature-content">
                                <h4>Institute Dashboard</h4>
                                <p>High-level overview of admissions, faculty activities, student performance, and institutional KPIs at a glance.</p>
                            </div>
                        </div>
                        
                        <div className="role-feature">
                            <div className="feature-icon-small">
                                <i className="fas fa-check-double"></i>
                            </div>
                            <div className="feature-content">
                                <h4>Approval Workflow</h4>
                                <p>Manage approval and rejection of notifications, announcements, staff actions, and institutional communications.</p>
                            </div>
                        </div>
                        
                        <div className="role-feature">
                            <div className="feature-icon-small">
                                <i className="fas fa-chart-line"></i>
                            </div>
                            <div className="feature-content">
                                <h4>Performance Insights</h4>
                                <p>Access consolidated reports on academic results, attendance trends, and teacher engagement metrics.</p>
                            </div>
                        </div>
                        
                        <div className="role-feature">
                            <div className="feature-icon-small">
                                <i className="fas fa-comments"></i>
                            </div>
                            <div className="feature-content">
                                <h4>Communication Hub</h4>
                                <p>Direct messaging with staff, teachers, and students, plus institute-wide announcement capabilities.</p>
                            </div>
                        </div>
                        
                        <div className="role-feature">
                            <div className="feature-icon-small">
                                <i className="fas fa-clipboard-check"></i>
                            </div>
                            <div className="feature-content">
                                <h4>Compliance Monitoring</h4>
                                <p>Track adherence to institutional policies and RFP-defined Service Level Agreements (SLAs).</p>
                            </div>
                        </div>
                        
                        <div className="role-feature">
                            <div className="feature-icon-small">
                                <i className="fas fa-user-friends"></i>
                            </div>
                            <div className="feature-content">
                                <h4>Faculty Management</h4>
                                <p>Monitor teacher performance, course loads, professional development, and resource allocation.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="role-benefits">
                        <h4>Key Benefits for Principals:</h4>
                        <div className="benefits-list">
                            <div className="benefit-item">
                                <i className="fas fa-check-circle"></i>
                                <span>Strategic institutional oversight</span>
                            </div>
                            <div className="benefit-item">
                                <i className="fas fa-check-circle"></i>
                                <span>Streamlined approval workflows</span>
                            </div>
                            <div className="benefit-item">
                                <i className="fas fa-check-circle"></i>
                                <span>Comprehensive performance analytics</span>
                            </div>
                            <div className="benefit-item">
                                <i className="fas fa-check-circle"></i>
                                <span>Enhanced communication channels</span>
                            </div>
                            <div className="benefit-item">
                                <i className="fas fa-check-circle"></i>
                                <span>Policy compliance monitoring</span>
                            </div>
                            <div className="benefit-item">
                                <i className="fas fa-check-circle"></i>
                                <span>Faculty performance tracking</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="role-content" id="official-content">
                    <div className="role-header">
                        <div className="role-icon">
                            <i className="fas fa-users-cog"></i>
                        </div>
                        <div className="role-title">
                            <Link href="/stem-dashboard"><h3>STEM Officials Dashboard</h3></Link>
                            <p>Master control panel for system-wide governance, multi-institution management, and national-level educational oversight.</p>
                        </div>
                    </div>
                    
                    <div className="role-features">
                        <div className="role-feature">
                            <div className="feature-icon-small">
                                <i className="fas fa-shield-alt"></i>
                            </div>
                            <div className="feature-content">
                                <h4>System Governance</h4>
                                <p>Full control over all modules and roles with ability to create, edit, deactivate users across the entire ecosystem.</p>
                            </div>
                        </div>
                        
                        <div className="role-feature">
                            <div className="feature-icon-small">
                                <i className="fas fa-university"></i>
                            </div>
                            <div className="feature-content">
                                <h4>Multi-Institution Management</h4>
                                <p>Oversee and configure all institutions/campuses within the LMS with uniform theme control and institute-specific branding.</p>
                            </div>
                        </div>
                        
                        <div className="role-feature">
                            <div className="feature-icon-small">
                                <i className="fas fa-cog"></i>
                            </div>
                            <div className="feature-content">
                                <h4>System-Wide Configuration</h4>
                                <p>Define global settings including multilingual options, notification preferences, and security compliance policies.</p>
                            </div>
                        </div>
                        
                        <div className="role-feature">
                            <div className="feature-icon-small">
                                <i className="fas fa-search"></i>
                            </div>
                            <div className="feature-content">
                                <h4>Monitoring & Compliance</h4>
                                <p>Centralized dashboard for system health, uptime monitoring, performance benchmarks, and SLA compliance tracking.</p>
                            </div>
                        </div>
                        
                        <div className="role-feature">
                            <div className="feature-icon-small">
                                <i className="fas fa-chart-pie"></i>
                            </div>
                            <div className="feature-content">
                                <h4>Advanced Reporting & Analytics</h4>
                                <p>Generate consolidated national-level reports on admissions, enrollments, performance insights, and financial summaries.</p>
                            </div>
                        </div>
                        
                        <div className="role-feature">
                            <div className="feature-icon-small">
                                <i className="fas fa-tools"></i>
                            </div>
                            <div className="feature-content">
                                <h4>Maintenance & Support Control</h4>
                                <p>Assign and monitor support tickets, manage system updates, patches, and oversee backup/recovery protocols.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="role-benefits">
                        <h4>Key Benefits for STEM Officials:</h4>
                        <div className="benefits-list">
                            <div className="benefit-item">
                                <i className="fas fa-check-circle"></i>
                                <span>Complete system governance</span>
                            </div>
                            <div className="benefit-item">
                                <i className="fas fa-check-circle"></i>
                                <span>Multi-institution oversight</span>
                            </div>
                            <div className="benefit-item">
                                <i className="fas fa-check-circle"></i>
                                <span>Centralized configuration management</span>
                            </div>
                            <div className="benefit-item">
                                <i className="fas fa-check-circle"></i>
                                <span>National-level analytics</span>
                            </div>
                            <div className="benefit-item">
                                <i className="fas fa-check-circle"></i>
                                <span>Comprehensive compliance tracking</span>
                            </div>
                            <div className="benefit-item">
                                <i className="fas fa-check-circle"></i>
                                <span>System maintenance control</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="technical" className="section section-light">
        <div className="container">
            <h2 className="text-center centered">Technical Specifications</h2>
            <p className="text-center mb-5">Engineered for high performance, reliability, and adaptability across various technical environments and user needs.</p>
            
            <div className="specs-grid">
                <div className="spec-card">
                    <div className="spec-icon">
                        <i className="fas fa-desktop"></i>
                    </div>
                    <h3>Responsive Design</h3>
                    <p>Fully responsive interface that works optimally on desktops, tablets, and mobile devices without needing separate applications.</p>
                </div>
                
                <div className="spec-card">
                    <div className="spec-icon">
                        <i className="fas fa-bolt"></i>
                    </div>
                    <h3>High Availability</h3>
                    <p>24/7/365 uptime with SLA benchmarks for immediate action reflection and minimal downtime alerts.</p>
                </div>
                
                <div className="spec-card">
                    <div className="spec-icon">
                        <i className="fas fa-database"></i>
                    </div>
                    <h3>Secure Data Storage</h3>
                    <p>Enterprise-grade secure storage with comprehensive audit trails, privacy compliance, and data integrity measures.</p>
                </div>
                
                <div className="spec-card">
                    <div className="spec-icon">
                        <i className="fas fa-sync-alt"></i>
                    </div>
                    <h3>Automatic Synchronization</h3>
                    <p>Offline activities automatically synchronize when connectivity is restored, ensuring data consistency across all devices.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="training" className="section section-alt">
        <div className="container">
            <h2 className="text-center centered">Training & Deployment</h2>
            <p className="text-center mb-5">Our comprehensive training programs ensure successful adoption and utilization of the STEM LMS across all institutions.</p>
            
            <div className="training-steps">
                <div className="training-step">
                    <div className="step-number">1</div>
                    <div>
                        <h3>Role-Based Training Programs</h3>
                        <p>Specific training developed for all LMS user categories including students, teachers, administrators, principals, and STEM officials with flexible delivery methods.</p>
                    </div>
                </div>
                
                <div className="training-step">
                    <div className="step-number">2</div>
                    <div>
                        <h3>Phased Rollout Approach</h3>
                        <p>Structured training in batches by user roles and institutions to ensure focused and relevant instruction with practical application.</p>
                    </div>
                </div>
                
                <div className="training-step">
                    <div className="step-number">3</div>
                    <div>
                        <h3>Comprehensive Documentation</h3>
                        <p>User manuals, quick reference sheets, checklists, and video tutorials for all roles and common tasks to support ongoing learning.</p>
                    </div>
                </div>
                
                <div className="training-step">
                    <div className="step-number">4</div>
                    <div>
                        <h3>Hands-On Activity-Based Training</h3>
                        <p>Experiential training allowing direct practice within the system, consistent with STEM model's emphasis on practical application.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="security" className="section section-light">
        <div className="container">
            <h2 className="text-center centered">Security & Data Protection</h2>
            <p className="text-center mb-5">Enterprise-grade security measures to protect sensitive information and ensure uninterrupted service with comprehensive backup and recovery.</p>
            
            <div className="security-features">
                <div className="security-feature">
                    <div className="security-icon">
                        <i className="fas fa-lock"></i>
                    </div>
                    <h3>Data Encryption</h3>
                    <p>End-to-end encryption for data at rest and in transit to protect against unauthorized access and breaches.</p>
                </div>
                
                <div className="security-feature">
                    <div className="security-icon">
                        <i className="fas fa-database"></i>
                    </div>
                    <h3>Automated Backups</h3>
                    <p>Daily and weekly automated backups with geo-separated storage for enhanced redundancy and quick recovery.</p>
                </div>
                
                <div className="security-feature">
                    <div className="security-icon">
                        <i className="fas fa-server"></i>
                    </div>
                    <h3>Disaster Recovery</h3>
                    <p>Robust disaster recovery site with 70% capacity of production environment for business continuity.</p>
                </div>
                
                <div className="security-feature">
                    <div className="security-icon">
                        <i className="fas fa-user-shield"></i>
                    </div>
                    <h3>Access Control</h3>
                    <p>Granular role-based access control and user privileges to restrict data access based on defined roles.</p>
                </div>
            </div>
        </div>
    </section>

    <section className="section section-alt">
        <div className="container">
            <h2 className="text-center centered">What Our Partners Say</h2>
            <p className="text-center mb-5">Hear from educational institutions and stakeholders who have experienced the transformative impact of our STEM LMS.</p>
            
            <div className="testimonial-grid">
                <div className="testimonial-card">
                    <div className="testimonial-text">
                        The bilingual interface and offline capabilities have dramatically improved access to quality education in our remote campus locations.
                    </div>
                    <div className="testimonial-author">
                        <div className="author-avatar">AS</div>
                        <div className="author-info">
                            <h4>Ahmed Shah</h4>
                            <p>STEM College Quetta</p>
                        </div>
                    </div>
                </div>
                
                <div className="testimonial-card">
                    <div className="testimonial-text">
                        The role-based dashboards and assessment tools have streamlined our administrative processes and improved teacher-student engagement.
                    </div>
                    <div className="testimonial-author">
                        <div className="author-avatar">SR</div>
                        <div className="author-info">
                            <h4>Sarah Rehman</h4>
                            <p>Karachi STEM Institute</p>
                        </div>
                    </div>
                </div>
                
                <div className="testimonial-card">
                    <div className="testimonial-text">
                        As a STEM official, the system-wide monitoring and analytics provide invaluable insights for policy making and resource allocation.
                    </div>
                    <div className="testimonial-author">
                        <div className="author-avatar">MK</div>
                        <div className="author-info">
                            <h4>Muhammad Khalid</h4>
                            <p>Pakistan Science Foundation</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="section section-light">
        <div className="container">
            <h2 className="text-center centered">Frequently Asked Questions</h2>
            <p className="text-center mb-5">Find answers to common questions about our STEM Learning Management System.</p>
            
            <div className="faq-container">
                <div className="faq-item">
                    <div className="faq-question">
                        What makes this LMS different from other learning management systems?
                        <i className="fas fa-chevron-down"></i>
                    </div>
                    <div className="faq-answer">
                        <p>Our STEM LMS is specifically designed for the Pakistani educational context with bilingual support (English/Urdu), offline capabilities for low-connectivity areas, role-based interfaces for different stakeholders, and integration with 500+ PSF training modules. It's built to benchmark against established institutions like Virtual University and AIOU while being tailored for STEM education.</p>
                    </div>
                </div>
                
                <div className="faq-item">
                    <div className="faq-question">
                        How does the offline functionality work?
                        <i className="fas fa-chevron-down"></i>
                    </div>
                    <div className="faq-answer">
                        <p>The system allows key functions like marking attendance, preparing quizzes/assignments, and uploading materials to work offline. When internet connectivity is restored, all offline activities automatically synchronize with the central LMS, ensuring data consistency without manual intervention.</p>
                    </div>
                </div>
                
                <div className="faq-item">
                    <div className="faq-question">
                        What kind of support and maintenance is provided?
                        <i className="fas fa-chevron-down"></i>
                    </div>
                    <div className="faq-answer">
                        <p>We provide comprehensive support during the project lifecycle and for an additional 12 months. This includes SLA-driven uptime and performance, regular system updates, patches, version control, real-time error detection, and role-specific training. Our support system includes a knowledge base, FAQs, and SLA-bound response times.</p>
                    </div>
                </div>
                
                <div className="faq-item">
                    <div className="faq-question">
                        Can the system support multiple institutions?
                        <i className="fas fa-chevron-down"></i>
                    </div>
                    <div className="faq-answer">
                        <p>Yes, the LMS is designed as a multi-institution platform with a Super Admin role that can manage all institutions/campuses within the ecosystem. Each institution can maintain its branding while following a uniform theme. The system supports hierarchical oversight with appropriate access controls for different roles across institutions.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="cta">
        <div className="container">
            <div className="cta-content">
                <h2 className="centered">Ready to Transform STEM Education?</h2>
                <p>Join us in creating a standardized, accessible digital learning environment for Pakistan's STEM institutions. Request a demo today to see how our LMS can benefit your organization.</p>
                <a href="#contact" className="btn btn-light">
                    <i className="fas fa-calendar-check"></i> Schedule a Demo
                </a>
            </div>
        </div>
    </section>

    <section id="contact" className="section section-light">
        <div className="container">
            <h2 className="text-center centered">Get In Touch</h2>
            <p className="text-center mb-5">Contact us to learn more about our STEM LMS or to request a personalized demonstration.</p>
            
            <div className="contact-container">
                <div className="contact-info">
                    <div className="contact-method">
                        <div className="contact-icon">
                            <i className="fas fa-building"></i>
                        </div>
                        <div>
                            <h3>Our Office</h3>
                            <p>Top Biz LLP (Software Wing)<br />Pakistan</p>
                        </div>
                    </div>
                    
                    <div className="contact-method">
                        <div className="contact-icon">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <div>
                            <h3>Email Us</h3>
                            <p>info@topbizllp.pk<br />support@topbizllp.pk</p>
                        </div>
                    </div>
                    
                    <div className="contact-method">
                        <div className="contact-icon">
                            <i className="fas fa-phone"></i>
                        </div>
                        <div>
                            <h3>Call Us</h3>
                            <p>+92 051 8777600<br />Mon - Fri, 9:00 AM - 5:00 PM</p>
                        </div>
                    </div>
                    
                    <div className="contact-method">
                        <div className="contact-icon">
                            <i className="fas fa-handshake"></i>
                        </div>
                        <div>
                            <h3>Partnerships</h3>
                            <p>We welcome collaborations with educational institutions, government bodies, and technology partners.</p>
                        </div>
                    </div>
                </div>
                
                <div className="contact-form">
                    <form id="demoForm">
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input type="text" id="name" className="form-control" placeholder="Enter your full name" required />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" className="form-control" placeholder="Enter your email" required />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="institution">Institution/Organization</label>
                            <input type="text" id="institution" className="form-control" placeholder="Enter your institution name" required />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="role">Your Role</label>
                            <select id="role" className="form-control" required>
                                <option value="">Select your role</option>
                                <option value="teacher">Teacher/Educator</option>
                                <option value="administrator">Administrator</option>
                                <option value="principal">Principal/Head</option>
                                <option value="official">STEM Official</option>
                                <option value="student">Student</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" className="form-control" placeholder="Tell us about your requirements or questions"></textarea>
                        </div>
                        
                        <button type="submit" className="btn btn-primary" style={{width:"100%"}}>
                            <i className="fas fa-paper-plane"></i> Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <footer>
        <div className="container">
            <div className="footer-grid">
                <div className="footer-col">
                    <h3>STEM LMS</h3>
                    <p>A comprehensive Learning Management System specifically designed for STEM institutions in Pakistan, developed by Top Biz LLP in partnership with Pakistan Science Foundation.</p>
                    <div className="social-links">
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                        <a href="#"><i className="fab fa-youtube"></i></a>
                    </div>
                </div>
                
                <div className="footer-col">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#roles">User Roles</a></li>
                        <li><a href="#technical">Technical Specs</a></li>
                        <li><a href="#training">Training</a></li>
                        <li><a href="#security">Security</a></li>
                    </ul>
                </div>
                
                <div className="footer-col">
                    <h3>Resources</h3>
                    <ul>
                        <li><a href="#">Documentation</a></li>
                        <li><a href="#">User Guides</a></li>
                        <li><a href="#">API Reference</a></li>
                        <li><a href="#">Support Center</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>
                
                <div className="footer-col">
                    <h3>Contact Us</h3>
                    <ul>
                        <li><i className="fas fa-building"></i> Top Biz LLP (Software Wing)</li>
                        <li><i className="fas fa-map-marker-alt"></i> Pakistan</li>
                        <li><i className="fas fa-envelope"></i> info@topbizllp.pk</li>
                        <li><i className="fas fa-phone"></i> +92 051 8777600</li>
                    </ul>
                </div>
            </div>
            
            <div className="copyright">
                <p>&copy; 2025 STEM Learning Management System. All rights reserved. | A Top Biz LLP & Pakistan Science Foundation Initiative</p>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default HomePage
