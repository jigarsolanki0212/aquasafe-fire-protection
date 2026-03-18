import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', service: '', message: '' });
    }, 3000);
  };

  const contactData = [
    { label: '📍 Address', value: 'Shop No. 512, 513, Hiltown Trade Centre, Near 108 Head Quarters, Kathwada Road, Nava Naroda, Ahmedabad – 382330, Gujarat, India', link: 'https://goo.gl/maps/Ahmedabad' },
    { label: '📞 Phone', value: '+91 73833 74584', link: 'tel:+917383374584' },
    { label: '✉️ Email', value: 'aquasafefireprotection55@gmail.com', link: 'mailto:aquasafefireprotection55@gmail.com' },
    { label: '🤵 Owner', value: 'Hardik Panchal', link: null },
    { label: '🧾 GSTIN', value: '24FOSPP5631F2ZK', link: null }
  ];

  return (
    <section className="section bg-color">
      <div className="reveal">
        <h2 className="section-title">
          Get a <span className="gradient-text">Free Quote</span>
        </h2>
        <p className="section-subtitle">
          Contact us today for specialized fire safety consultancy and solutions.
        </p>
      </div>

      <div className="contact-grid">
        <div className="reveal-left">
          <div className="flex flex-col gap-1">
            {contactData.map((c, i) => (
              <div key={i} className="glass-card" style={{ padding: '20px' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '1px' }}>{c.label}</span>
                <p style={{ fontWeight: '600', marginTop: '5px' }}>
                  {c.link ? <a href={c.link} target="_blank" rel="noreferrer" style={{ color: 'var(--primary-orange)' }}>{c.value}</a> : c.value}
                </p>
              </div>
            ))}
            <a href="https://wa.me/917383374584" className="btn-primary" style={{ marginTop: '20px', justifyContent: 'center' }}>
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="reveal-right">
          <form className="glass-card" style={{ padding: '40px' }} onSubmit={handleSubmit}>
            <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div className="form-group" style={{ gridColumn: 'span 1' }}>
                <label>Name</label>
                <input type="text" placeholder="John Doe" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
              </div>
              <div className="form-group" style={{ gridColumn: 'span 1' }}>
                <label>Phone</label>
                <input type="tel" placeholder="+91 00000 00000" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
              </div>
            </div>
            
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="john@example.com" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
            </div>

            <div className="form-group">
              <label>Service Interested In</label>
              <select required value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})}>
                <option value="">Select Service</option>
                <option value="AMC">AMC - Maintenance</option>
                <option value="Refilling">Refilling & Servicing</option>
                <option value="NOC">NOC & Consultancy</option>
                <option value="Products">New Equipment Purchase</option>
                <option value="Training">Fire Safety Training</option>
              </select>
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea rows="4" placeholder="Tell us about your requirements..." required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>
            </div>

            <button type="submit" className={`submit-btn ${submitted ? 'success' : ''}`}>
              {submitted ? '✅ Message Sent!' : '🔥 Submit Enquiry'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
