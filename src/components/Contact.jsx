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

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Constructing the email body
    const emailTo = 'aquasafefireprotection55@gmail.com';
    const body = `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nService: ${formData.service}\n\nMessage: ${formData.message}`;
    const subject = `New Inquiry: ${formData.service} from ${formData.name}`;
    
    // Opening the user's email client
    window.location.href = `mailto:${emailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', phone: '', email: '', service: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  const contactInfo = [
    { icon: '📍', label: 'Registered Office', value: 'Shop No. 512–513, Hiltown Centre, Ahmedabad – 382330', link: 'https://goo.gl/maps/Ahmedabad' },
    { icon: '📞', label: 'Direct Line', value: '+91 73833 74584', link: 'tel:+917383374584' },
    { icon: '📧', label: 'Email Support', value: 'aquasafefireprotection55@gmail.com', link: 'mailto:aquasafefireprotection55@gmail.com' },
    { icon: '🧾', label: 'GSTIN / UIN', value: '24FOSPP5631F2ZK', link: null }
  ];

  return (
    <section className="section" id="contact" style={{ background: 'var(--dark)' }}>
      <div className="container">
        <div className="reveal visible" style={{ textAlign: 'center' }}>
          <div className="s-tag">📞 Immediate Support</div>
          <h2 className="s-title">Get a <span className="gradient-text">Free Safety Quote</span></h2>
          <p className="s-sub" style={{ margin: '0 auto 60px' }}>Fill out the form below or connect with our safety experts directly on WhatsApp for an on-site consultation.</p>
        </div>

        <div className="contact-wrap">
          <div className="reveal-left visible">
            <div className="flex flex-col gap-2">
              {contactInfo.map((ci, i) => (
                <div key={i} className="flex items-center gap-1" style={{ marginBottom: '24px' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'rgba(255,179,71,0.06)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0 }}>
                    {ci.icon}
                  </div>
                  <div style={{ marginLeft: '20px' }}>
                    <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px', fontWeight: '700' }}>{ci.label}</div>
                    <div style={{ fontWeight: '700', fontSize: '1rem', color: '#fff' }}>
                      {ci.link ? <a href={ci.link} style={{ color: 'inherit', textDecoration: 'none' }}>{ci.value}</a> : ci.value}
                    </div>
                  </div>
                </div>
              ))}
              <a href="https://wa.me/917383374584" className="btn-fire" style={{ background: '#25d366', marginTop: '10px', width: 'fit-content' }}>
                💬 Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="reveal-right visible">
            <div className="form-card">
              <h3 style={{ marginBottom: '32px', fontSize: '1.4rem' }}>🔥 Inquiry Form</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="fg">
                    <input 
                      type="text" 
                      placeholder="Your Full Name" 
                      required 
                      value={formData.name} 
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="fg">
                    <input 
                      type="tel" 
                      placeholder="Phone (WhatsApp preferred)" 
                      required 
                      value={formData.phone} 
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>
                
                <div className="fg">
                  <input 
                    type="email" 
                    placeholder="Official Email Address" 
                    required 
                    value={formData.email} 
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div className="fg">
                  <select 
                    required 
                    value={formData.service} 
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                  >
                    <option value="">Select Required Service</option>
                    <option value="Fire Extinguisher & Refilling">Fire Extinguisher & Refilling</option>
                    <option value="Hydrant & Sprinkler Systems">Hydrant & Sprinkler Systems</option>
                    <option value="Fire Alarm & Detection">Fire Alarm & Detection</option>
                    <option value="AMC (Annual Maintenance)">AMC (Annual Maintenance)</option>
                    <option value="Fire Planning & NOC Consultancy">Fire Planning & NOC Consultancy</option>
                    <option value="CCTV & Industrial Safety">CCTV & Industrial Safety</option>
                  </select>
                </div>

                <div className="fg">
                  <textarea 
                    rows="4" 
                    placeholder="Please describe your premises and safety requirements..." 
                    required 
                    value={formData.message} 
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className={`btn-fire ${status === 'success' ? 'success' : ''}`} 
                  style={{ width: '100%', padding: '20px', background: status === 'success' ? '#25d366' : '' }}
                >
                  {status === 'idle' && '🔥 Send Inquiry Now'}
                  {status === 'submitting' && '🚀 Processing...'}
                  {status === 'success' && '✅ Inquiry Sent!'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
