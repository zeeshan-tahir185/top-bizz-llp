"use client";
import { useState } from "react";

// New landing page design (adapted from the new site build), rebranded for
// Top Biz LLP. Theme is scoped under the `.tb-landing` wrapper (see globals.css)
// so it does not affect the rest of the site. The header/navbar and footer are
// intentionally NOT rendered here — the existing shared Navbar/Footer are used
// by the page so linking stays exactly as on the current site.
const partners = [
  { name: "Amazon Web Services", logo: "/images/partners/logos/aws.svg" },
  { name: "Fortinet", logo: "/images/partners/logos/fortinet.svg" },
  { name: "Kaspersky", logo: "/images/partners/logos/kaspersky.svg" },
  { name: "Dell", logo: "/images/partners/logos/dell.svg" },
  { name: "Cisco", logo: "/images/partners/logos/cisco.svg" },
  { name: "Akamai", logo: "/images/partners/logos/akamai.svg" },
  { name: "Qualys", logo: "/images/partners/logos/qualys.svg" },
  { name: "VMware", logo: "/images/partners/logos/vmware.svg" },
  { name: "Oracle", logo: "/images/partners/logos/oracle.svg" },
  { name: "SonarQube", logo: "/images/partners/logos/sonarqube.svg" },
];

const faqs = [
  {
    q: "Do you work with on-prem and cloud?",
    a: "Yes. We design hybrid architectures, integrate with existing systems, and migrate workloads when appropriate.",
  },
  {
    q: "Can you operate our environment after delivery?",
    a: "Yes. Our managed services provide 24×7 monitoring, incident response, and monthly reporting with KPIs.",
  },
  {
    q: "How do we start?",
    a: "Book a 30-minute scoping call. We agree on goals, success criteria, and next steps, then share a concise proposal.",
  },
];

export default function LandingPage() {
  // FAQ accordion controlled by React state (avoids the Bootstrap JS collapse
  // conflict that caused the answer to flash open then hide).
  const [openFaq, setOpenFaq] = useState(0);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.querySelector("[name=name]").value.trim();
    const email = form.querySelector("[name=email]").value.trim();
    const company = form.querySelector("[name=company]").value.trim();
    const message = form.querySelector("[name=message]").value.trim();
    const subject = encodeURIComponent("Website enquiry - Top Biz LLP");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\n${message}`
    );
    window.location.href = `mailto:info@topbizllp.pk?subject=${subject}&body=${body}`;
  };

  return (
    <div className="tb-landing">
      {/* Hero */}
      <header className="hero py-5" id="home">
        <div className="container py-4">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold text-gradient">
                Secure IT, Cloud, and Systems Integration
              </h1>
              <p className="lead mt-3">
                We design, implement, and operate reliable, secure technology
                environments. Cybersecurity, cloud, networking, and managed
                operations under one roof.
              </p>
              <div className="d-flex gap-2 mt-3">
                <a href="#contact" className="btn btn-primary btn-lg">
                  Talk to an Expert
                </a>
                <a href="#services" className="btn btn-outline-primary btn-lg">
                  Explore Services
                </a>
              </div>
              <ul className="list-inline mt-4 small text-muted">
                <li className="list-inline-item">
                  <i className="bi bi-shield-lock"></i> Cybersecurity
                </li>
                <li className="list-inline-item">
                  <i className="bi bi-cloud-check"></i> Cloud
                </li>
                <li className="list-inline-item">
                  <i className="bi bi-diagram-3"></i> Integration
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="p-4 bg-white rounded-4 shadow-sm">
                <h5 className="mb-3">Why Top Biz LLP</h5>
                <div className="row g-3">
                  <div className="col-6">
                    <div className="d-flex">
                      <i className="bi bi-patch-check me-2"></i>
                      <div>
                        <strong>Security First</strong>
                        <div className="text-muted small">
                          Built-in controls, audit ready
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex">
                      <i className="bi bi-rocket me-2"></i>
                      <div>
                        <strong>Time to Value</strong>
                        <div className="text-muted small">
                          Fast, reliable delivery
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex">
                      <i className="bi bi-gear-wide-connected me-2"></i>
                      <div>
                        <strong>Integration</strong>
                        <div className="text-muted small">
                          From legacy to cloud
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex">
                      <i className="bi bi-people me-2"></i>
                      <div>
                        <strong>Managed Ops</strong>
                        <div className="text-muted small">
                          24x7 monitoring &amp; response
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <a className="link-primary" href="#about">
                    Learn more about us →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Services */}
      <section id="services" className="py-5">
        <div className="container">
          <h2 className="section-title">Services</h2>
          <p className="text-muted mb-4">
            End to end delivery, from strategy and design to implementation and
            operations.
          </p>
          <div className="row g-4 row-cols-1 row-cols-md-2 row-cols-lg-3">
            {[
              {
                icon: "bi-shield-lock",
                title: "Information Security",
                text: "Penetration testing, security audits, risk assessments, and incident response programs aligned with ISO 27001.",
              },
              {
                icon: "bi-hdd-network",
                title: "Network Infrastructure",
                text: "Design, deployment, and lifecycle management for switching, routing, Wi-Fi 6, SD-WAN, and secure remote access.",
              },
              {
                icon: "bi-cloud-arrow-up",
                title: "Cloud Solutions",
                text: "Cloud migrations, hybrid and multi-cloud architectures, cost optimization, and cloud security best practices.",
              },
              {
                icon: "bi-database-lock",
                title: "Data Protection",
                text: "Backup and recovery, disaster recovery planning, business continuity, and immutable storage options.",
              },
              {
                icon: "bi-activity",
                title: "Managed SOC & NOC",
                text: "24×7 monitoring, SIEM and SOAR, EDR, vulnerability management, and SLA based operations reporting.",
              },
              {
                icon: "bi-braces",
                title: "Software & Integration",
                text: "Custom development, API gateways and load balancing, identity and access, and systems integration.",
              },
              {
                icon: "bi-robot",
                title: "Robotics & Automation Solutions",
                text: "We supply cutting-edge robotics and drones, alongside custom R&D solutions, to enhance industrial automation and surveillance with advanced technology.",
              },
              {
                icon: "bi-cpu",
                title: "Electronics Engineering Services",
                text: "Our expertise in RF circuits, DSP, FPGA design, and embedded systems delivers innovative solutions for military, medical, and commercial applications.",
              },
              {
                icon: "bi-water",
                title: "Naval Engineering & Platform Integration",
                text: "Our engineering division provides design support, integration, and modernization services for naval vessels and marine platforms.",
              },
              {
                icon: "bi-tools",
                title: "Legacy Systems Modernisation & Reverse Engineering",
                text: "We restore, upgrade, and re-engineer obsolete naval and marine subsystems through advanced reverse-engineering tools.",
              },
            ].map((s) => (
              <div className="col" key={s.title}>
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <i className={`bi ${s.icon}`}></i>
                    <h5 className="card-title mt-2">{s.title}</h5>
                    <p className="card-text">{s.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="py-5 bg-light">
        <div className="container">
          <h2 className="section-title">Solutions</h2>
          <p className="text-muted mb-4">
            Pre-engineered, proven solution stacks to accelerate delivery.
          </p>
          <div className="row g-3 small">
            {[
              "EDR, SIEM, SOAR",
              "PAM & Patch Mgmt",
              "DDoS Protection",
              "API Gateway & WAF",
              "Hybrid Cloud",
              "DR & Business Continuity",
              "Zero Trust Network",
              "Email & Web Security",
            ].map((sol) => (
              <div className="col-6 col-md-3" key={sol}>
                <span className="badge text-bg-primary w-100 badge-pill">
                  {sol}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="py-5">
        <div className="container">
          <h2 className="section-title">Industries</h2>
          <p className="text-muted mb-4">
            Trusted across sectors with secure, scalable, and compliant
            solutions.
          </p>
          <div className="row g-4">
            {[
              {
                icon: "bi-bank",
                title: "Government",
                text: "Secure platforms, data protection, and compliance for public services and citizen scale systems.",
              },
              {
                icon: "bi-cash-coin",
                title: "Finance",
                text: "Resilient, auditable systems with strong controls for payments, banking, and fintech workloads.",
              },
              {
                icon: "bi-heart-pulse",
                title: "Healthcare",
                text: "Privacy-first architectures, access controls, and secure data exchange for clinical systems.",
              },
              {
                icon: "bi-buildings",
                title: "Enterprise",
                text: "Hybrid cloud, collaboration, and security at scale for distributed teams and branches.",
              },
              {
                icon: "bi-mortarboard",
                title: "Education",
                text: "Campus networks, LMS integrations, and secure identity for students and staff.",
              },
              {
                icon: "bi-broadcast-pin",
                title: "Telecom",
                text: "Carrier grade routing, security perimeters, and observability for high-throughput networks.",
              },
            ].map((ind) => (
              <div className="col-md-6 col-lg-4" key={ind.title}>
                <div className="tb-industry-card h-100 p-4 rounded-4 bg-white">
                  <div className="tb-industry-icon mb-3">
                    <i className={`bi ${ind.icon}`}></i>
                  </div>
                  <h6 className="fw-semibold mb-2">{ind.title}</h6>
                  <p className="text-muted small mb-0">{ind.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="partners" className="py-5 bg-light">
        <div className="container">
          <h2 className="section-title">Technology Partners</h2>
          <p className="text-muted mb-4">
            We work across leading platforms and OEMs to deliver the right fit
            for your environment.
          </p>
        </div>
        {/* Logo marquee (scrolls right-to-left, pauses on hover).
            Two identical groups animate together for a seamless infinite loop. */}
        <div className="container">
          <div className="tb-marquee">
            {[0, 1].map((g) => (
              <div className="tb-marquee__group" key={g} aria-hidden={g === 1}>
                {partners.map((p, i) => (
                  <div className="tb-marquee__item" key={`${g}-${p.name}-${i}`}>
                    <img src={p.logo} alt={p.name} loading="lazy" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-5">
        <div className="container">
          <h2 className="section-title">About Top Biz LLP</h2>
          <div className="row g-4 align-items-center">
            <div className="col-lg-7">
              <p>
                Top Biz LLP designs and operates secure, modern IT environments.
                Our teams combine security engineering, cloud architecture, and
                systems integration to deliver projects that are audit ready and
                production proven.
              </p>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <i className="bi bi-check-circle text-primary me-2"></i>
                  Security by design across every engagement
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle text-primary me-2"></i>
                  Documented architectures and runbooks for reliable operations
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle text-primary me-2"></i>
                  Transparent SLAs and reporting for managed services
                </li>
              </ul>
            </div>
            <div className="col-lg-5">
              <div className="p-4 rounded-4 border">
                <h6 className="fw-semibold">Engagement Models</h6>
                <div className="row g-3 mt-1">
                  {[
                    {
                      title: "Advisory",
                      price: "On-demand",
                      text: "Security and cloud advisory, design reviews, and architecture workshops.",
                    },
                    {
                      title: "Projects",
                      price: "Fixed scope",
                      text: "Implementation with clear deliverables, documentation, and handover.",
                    },
                    {
                      title: "Managed",
                      price: "SLA based",
                      text: "24×7 monitoring, incident handling, and continuous improvement.",
                    },
                  ].map((m) => (
                    <div className="col-12" key={m.title}>
                      <div className="pricing-card p-3 rounded-3 bg-light">
                        <div className="d-flex justify-content-between align-items-center">
                          <strong>{m.title}</strong>
                          <span className="price text-primary">{m.price}</span>
                        </div>
                        <div className="mt-2 text-muted small">{m.text}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-5 bg-light">
        <div className="container">
          <h2 className="section-title">What Clients Say</h2>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="p-4 bg-white rounded-4 shadow-sm h-100">
                <p className="mb-1">
                  “Top Biz LLP delivered our migration with zero downtime and
                  documented everything. Operations have been smooth since.”
                </p>
                <div className="small text-muted">Head of IT, Public Sector</div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="p-4 bg-white rounded-4 shadow-sm h-100">
                <p className="mb-1">
                  “Their security-first approach helped us pass our audit on the
                  first attempt.”
                </p>
                <div className="small text-muted">CISO, Financial Services</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-5">
        <div className="container">
          <h2 className="section-title">FAQ</h2>
          <div className="accordion" id="faqAcc">
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <div className="accordion-item" key={i}>
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button ${open ? "" : "collapsed"}`}
                      type="button"
                      aria-expanded={open}
                      onClick={() => setOpenFaq(open ? -1 : i)}
                    >
                      {f.q}
                    </button>
                  </h2>
                  {open && (
                    <div className="accordion-body tb-faq-body">{f.a}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-5 bg-light">
        <div className="container">
          <h2 className="section-title">Contact</h2>
          <div className="row g-4">
            <div className="col-lg-6">
              <form className="row g-3" onSubmit={handleContactSubmit}>
                <div className="col-md-6">
                  <label className="form-label">Name</label>
                  <input type="text" name="name" className="form-control" required />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Email</label>
                  <input type="email" name="email" className="form-control" required />
                </div>
                <div className="col-12">
                  <label className="form-label">Company</label>
                  <input type="text" name="company" className="form-control" />
                </div>
                <div className="col-12">
                  <label className="form-label">Message</label>
                  <textarea
                    name="message"
                    rows="5"
                    className="form-control"
                    required
                  ></textarea>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary btn-lg" type="submit">
                    Send
                  </button>
                  <div className="form-text">
                    This opens your email client to send a message to{" "}
                    <strong>info@topbizllp.pk</strong>.
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-6">
              <div className="p-4 bg-white rounded-4 shadow-sm h-100">
                <h6 className="fw-semibold">Get in touch</h6>
                <p className="text-muted small mb-1">
                  Email: <a href="mailto:info@topbizllp.pk">info@topbizllp.pk</a>
                </p>
                <p className="text-muted small mb-1">
                  Phone: <a href="tel:+92518777600">+92 51 8777600</a>
                </p>
                <p className="text-muted small mb-0">
                  Location: 761, Lane 7-E, Gulistan Colony, Near Joyland,
                  Rawalpindi
                </p>
                <hr />
                <p className="small text-muted mb-0">
                  Prefer a call? Share a time, we will send a calendar invite
                  with a meet link.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
