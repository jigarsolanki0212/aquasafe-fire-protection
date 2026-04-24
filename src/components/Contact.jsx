import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MapPin, Phone, Mail, FileText, Send, CheckCircle2, MessageSquareText } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

const Contact = () => {
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  // Pre-fill form from URL param
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const item = params.get('item');
    if (item) {
      setFormData(prev => ({
        ...prev,
        message: `I would like to request a quote for: ${item}`,
        service: 'System Installation' // default pick
      }));
    }
  }, [location.search]);

  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/aquasafefireprotection55@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          service: formData.service,
          message: formData.message,
          _subject: `New AquaSafe Inquiry from ${formData.name}`,
          _template: "table" // Makes the email look nice
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', email: '', service: '', message: '' });
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        console.error("Form submission failed:", await response.text());
        setStatus('idle');
        alert("Failed to send inquiry. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus('idle');
      alert("Network error. Please try again.");
    }
  };

  const contactInfo = [
    { icon: <MapPin size={24} />, label: 'Office Address', value: 'Shop No. 512, Hiltown Centre, Ahmedabad – 382330' },
    { icon: <Phone size={24} />, label: 'Direct Line', value: '+91 73833 74584', link: 'tel:+917383374584' },
    { icon: <Mail size={24} />, label: 'Email Support', value: 'aquasafefireprotection55@gmail.com', link: 'mailto:aquasafefireprotection55@gmail.com' },
    { icon: <FileText size={24} />, label: 'GSTIN / Registration', value: '24FOSPP5631F2ZK' }
  ];

  return (
    <section className="section" id="contact" style={{ background: 'var(--bg-accent)', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px' }}
        >
          <div className="s-tag">
            <Phone size={16} /> Professional Consultancy
          </div>
          <h2 className="s-title">Request a <span className="gradient-text">Safety Audit</span></h2>
          <p className="s-sub" style={{ margin: '0 auto' }}>
            Get expert advice for your industrial, commercial, or residential safety needs. 
            Ahmedabad's most trusted fire safety professionals are ready to help.
          </p>
        </motion.div>

        <div className="grid-2" style={{ alignItems: 'start' }}>
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={stagger}
          >
            <div style={{ display: 'grid', gap: '16px' }}>
              {contactInfo.map((ci, i) => (
                <motion.div variants={fadeUp} key={i} className="deluxe-card contact-info-card">
                  <div style={{ flexShrink: 0, width: '56px', height: '56px', borderRadius: '14px', background: 'var(--gradient-fire)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                    {ci.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '800', letterSpacing: '1px', marginBottom: '4px' }}>{ci.label}</div>
                    <div style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--text)', wordBreak: 'break-word' }}>
                      {ci.link ? <a href={ci.link} style={{ color: 'inherit', textDecoration: 'none' }}>{ci.value}</a> : ci.value}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="deluxe-card contact-form-card" 
          >
            <h3 style={{ marginBottom: '32px', fontSize: '1.5rem', fontWeight: '800', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
              <MessageSquareText size={24} color="var(--red)" /> Inquiry Form
            </h3>
            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '16px' }}>
              <div style={{ display: 'grid', gap: '16px' }}>
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  required 
                  value={formData.name} 
                  onChange={(e) => setFormData({...formData, name: e.target.value})} 
                  style={{ width: '100%', padding: '16px', borderRadius: '12px', background: 'var(--glass)', border: '1px solid var(--glass-border)', color: 'var(--text)', outline: 'none' }} 
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  required 
                  value={formData.phone} 
                  onChange={(e) => setFormData({...formData, phone: e.target.value})} 
                  style={{ width: '100%', padding: '16px', borderRadius: '12px', background: 'var(--glass)', border: '1px solid var(--glass-border)', color: 'var(--text)', outline: 'none' }} 
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  required 
                  value={formData.email} 
                  onChange={(e) => setFormData({...formData, email: e.target.value})} 
                  style={{ width: '100%', padding: '16px', borderRadius: '12px', background: 'var(--glass)', border: '1px solid var(--glass-border)', color: 'var(--text)', outline: 'none' }} 
                />
              </div>
              <select 
                required 
                value={formData.service} 
                onChange={(e) => setFormData({...formData, service: e.target.value})} 
                style={{ width: '100%', padding: '16px', borderRadius: '12px', background: 'var(--glass)', border: '1px solid var(--glass-border)', color: 'var(--text)', outline: 'none' }}
              >
                <option value="">Select Service</option>
                <option value="Extinguisher Refill">Extinguisher Refill</option>
                <option value="System Installation">System Installation</option>
                <option value="Fire NOC Guidance">Fire NOC Guidance</option>
                <option value="AMC Plan">AMC Maintenance Plan</option>
              </select>
              <textarea 
                rows="4" 
                placeholder="How can we help you?" 
                required 
                value={formData.message} 
                onChange={(e) => setFormData({...formData, message: e.target.value})} 
                style={{ width: '100%', padding: '16px', borderRadius: '12px', background: 'var(--glass)', border: '1px solid var(--glass-border)', color: 'var(--text)', outline: 'none', resize: 'none' }}
              ></textarea>
              <button 
                type="submit" 
                className="btn-fire" 
                disabled={status === 'submitting'}
                style={{ width: '100%', padding: '18px', background: status === 'success' ? '#22c55e' : '', justifyContent: 'center' }}
              >
                {status === 'idle' && <><Send size={18} /> Send Inquiry</>}
                {status === 'submitting' && 'Processing...'}
                {status === 'success' && <><CheckCircle2 size={18} /> Inquiry Sent!</>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
