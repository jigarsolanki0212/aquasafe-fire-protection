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
    { icon: '📍', label: 'Registered Office', value: 'Shop No. 512–513, Hiltown Trade Centre, Ahmedabad – 382330', link: 'https://goo.gl/maps/Ahmedabad' },
    { icon: '📞', label: 'Phone / WhatsApp', value: '+91 73833 74584', link: 'tel:+917383374584' },
    { icon: '📧', label: 'Email Address', value: 'aquasafefireprotection55@gmail.com', link: 'mailto:aquasafefireprotection55@gmail.com' },
    { icon: '👤', label: 'Contact Person', value: 'Hardik Panchal', link: null },
    { icon: '🧾', label: 'GSTIN', value: '24FOSPP5631F2ZK', link: null }
  ];

  return (
    <section className="section contact-bg" id="contact">
      <div className="inner">
        <div className="reveal visible" style={{ textAlign: 'center' }}>
          <div className="s-tag">📞 Contact Us</div>
          <h2 className="s-title">Get a <span className="gradient-text">Free Quote</span> Today</h2>
          <p className="s-sub" style={{ margin: '0 auto 56px' }}>Ready to secure your premises? Fill out the form below or connect with us directly on WhatsApp.</p>
        </div>

        <div className="contact-wrap">
          <div className="reveal-left visible">
            <div className="flex flex-col gap-2" style={{ gap: '24px' }}>
              {contactInfo.map((ci, i) => (
                <div key={i} className="flex items-center gap-1" style={{ gap: '20px' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: 'var(--glass)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}>
                    {ci.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>{ci.label}</div>
                    <div style={{ fontWeight: '700', fontSize: '1rem' }}>
                      {ci.link ? <a href={ci.link} style={{ color: 'inherit' }}>{ci.value}</a> : ci.value}
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
              <h3 style={{ marginBottom: '24px', fontWeight: '800' }}>🔥 Inquiry Form</h3>
              <form onSubmit={handleSubmit}>
                <div className="flex" style={{ gap: '16px', flexWrap: 'wrap' }}>
                  <div className="fg" style={{ flex: '1 1 200px' }}>
                    <input 
                      type="text" 
                      placeholder="Your Full Name" 
                      required 
                      value={formData.name} 
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="fg" style={{ flex: '1 1 200px' }}>
                    <input 
                      type="tel" 
                      placeholder="Phone Number" 
                      required 
                      value={formData.phone} 
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>
                
                <div className="fg">
                  <input 
                    type="email" 
                    placeholder="Email Address" 
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
                    <option value="">Select Service Required</option>
                    <option value="Extinguisher / Refilling">Fire Extinguisher / Refilling</option>
                    <option value="Hydrant System">Fire Hydrant System</option>
                    <option value="Alarm & Detection">Fire Alarm & Detection</option>
                    <option value="AMC">AMC (Annual Maintenance)</option>
                    <option value="Consultancy / NOC">Fire Consultancy / NOC</option>
                    <option value="CCTV / Security">CCTV / Security System</option>
                  </select>
                </div>

                <div className="fg">
                  <textarea 
                    rows="4" 
                    placeholder="Message or specific safety requirements..." 
                    required 
                    value={formData.message} 
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className={`btn-fire ${status === 'success' ? 'success' : ''}`} 
                  style={{ width: '100%', padding: '18px', background: status === 'success' ? '#25d366' : '' }}
                >
                  {status === 'idle' && '🔥 Send Inquiry →'}
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
