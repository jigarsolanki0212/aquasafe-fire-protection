import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => { e.preventDefault(); setStatus('submitting');
    const body = `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nService: ${formData.service}\n\nMessage: ${formData.message}`;
    window.location.href = `mailto:aquasafefireprotection55@gmail.com?subject=New Inquiry from ${formData.name}&body=${encodeURIComponent(body)}`;
    setTimeout(() => { setStatus('success'); setFormData({ name: '', phone: '', email: '', service: '', message: '' }); setTimeout(() => setStatus('idle'), 3000); }, 1000);
  };

  const contactInfo = [
    { icon: '📍', label: 'Office Address', value: 'Shop No. 512, Hiltown Centre, Ahmedabad – 382330' },
    { icon: '📞', label: 'Direct Line', value: '+91 73833 74584', link: 'tel:+917383374584' },
    { icon: '📧', label: 'Email Support', value: 'aquasafefireprotection55@gmail.com', link: 'mailto:aquasafefireprotection55@gmail.com' },
    { icon: '🧾', label: 'GSTIN / UIN', value: '24FOSPP5631F2ZK' }
  ];

  return (
    <section className="section" id="contact" style={{ background: 'var(--bg-accent)', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center' }}>
          <div className="s-tag">📞 Professional Consultancy</div>
          <h2 className="s-title">Get an Expert <br /><span className="gradient-text">Safety Audit</span></h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '60px', marginTop: '60px' }}>
          <div className="reveal">
            <div style={{ display: 'grid', gap: '24px' }}>
              {contactInfo.map((ci, i) => (
                <div key={i} className="deluxe-card" style={{ padding: '30px', display: 'flex', gap: '24px', alignItems: 'center', textAlign: 'left' }}>
                  <div style={{ fontSize: '1.8rem', width: '60px', height: '60px', borderRadius: '15px', background: 'var(--gradient-fire)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{ci.icon}</div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '800' }}>{ci.label}</div>
                    <div style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--text)' }}>{ci.link ? <a href={ci.link} style={{ color: 'inherit', textDecoration: 'none' }}>{ci.value}</a> : ci.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="deluxe-card reveal" style={{ padding: '48px' }}>
            <h3 style={{ marginBottom: '40px', fontSize: '1.5rem', fontWeight: '900', textAlign: 'center' }}>🔥 Inquiry Form</h3>
            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '20px' }}>
              <input type="text" placeholder="Full Name" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} style={{ padding: '16px', borderRadius: '12px', background: 'var(--glass)', border: '1px solid var(--border)', color: 'var(--text)' }} />
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '20px' }}>
                <input type="tel" placeholder="Phone Number" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} style={{ padding: '16px', borderRadius: '12px', background: 'var(--glass)', border: '1px solid var(--border)', color: 'var(--text)' }} />
                <input type="email" placeholder="Email Address" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} style={{ padding: '16px', borderRadius: '12px', background: 'var(--glass)', border: '1px solid var(--border)', color: 'var(--text)' }} />
              </div>
              <select required value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})} style={{ padding: '16px', borderRadius: '12px', background: 'var(--glass)', border: '1px solid var(--border)', color: 'var(--text)' }}>
                <option value="">Select Service</option>
                <option value="Extinguisher Refill">Extinguisher Refill</option>
                <option value="System Install">System Install</option>
                <option value="Fire NOC Guidance">Fire NOC Guidance</option>
                <option value="AMC Plan">AMC Plan</option>
              </select>
              <textarea rows="4" placeholder="Your Premises and Needs..." required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} style={{ padding: '16px', borderRadius: '12px', background: 'var(--glass)', border: '1px solid var(--border)', color: 'var(--text)' }}></textarea>
              <button type="submit" className="btn-fire" style={{ width: '100%', padding: '20px', background: status === 'success' ? '#25d366' : '' }}>
                {status === 'idle' && '📑 Send Inquiry'}
                {status === 'submitting' && '🚀 Processing...'}
                {status === 'success' && '✅ Inquiry Sent!'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
