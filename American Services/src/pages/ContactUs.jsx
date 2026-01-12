import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { SERVICES } from '../data/services';

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function ContactUs() {
  const canonical = 'https://www.amsrvcs.com/contact';
  const location = useLocation();

  useSEO({
    title: 'Contact | American Services',
    description: 'Contact American Services for track and rail support, certified load adjustment and transfer, environmental and industrial services, earth work, and 24/7 emergency coverage.',
    canonical
  });

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Preselect service from query param
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const serviceSlug = params.get('service');
    if (serviceSlug) {
      const match = SERVICES.find((svc) => svc.slug === serviceSlug);
      if (match && !formData.message) {
        setFormData((prev) => ({
          ...prev,
          message: `Service: ${match.name} — Please include scope, location, and timing.`
        }));
      }
    }
  }, [location.search, formData.message]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear status when user starts typing again
    if (status.message) {
      setStatus({ type: '', message: '' });
    }
  };

  const validateForm = () => {
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName) {
      setStatus({ type: 'error', message: 'Please enter your name.' });
      return false;
    }
    if (!trimmedEmail) {
      setStatus({ type: 'error', message: 'Please enter your email address.' });
      return false;
    }
    if (!EMAIL_REGEX.test(trimmedEmail)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return false;
    }
    if (!trimmedMessage) {
      setStatus({ type: 'error', message: 'Please enter a message.' });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Prevent double submission
    if (isSubmitting) return;
    
    // Validate form
    if (!validateForm()) return;

    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      // Prepare sanitized form data
      const submitData = {
        name: formData.name.trim(),
        company: formData.company.trim() || 'Not provided',
        email: formData.email.trim(),
        phone: formData.phone.trim() || 'Not provided',
        message: formData.message.trim()
      };

      // Submit to Vercel serverless function
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(submitData),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus({ type: 'success', message: 'Message sent successfully. We will respond as promptly as possible.' });
        // Reset form
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus({ 
        type: 'error', 
        message: 'Unable to send message. Please try again or call our emergency line.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page">
      <section>
        <h1>Contact American Services</h1>
        <p>Use this form or call to coordinate track and rail services, certified load adjustment and transfer, environmental and industrial services, earth work, or emergency response and service coverage. One contact, one service catalog.</p>
        <div className="services-links">
          <p className="services-links-label">Service links</p>
          <div className="services-links-list">
            {SERVICES.map((service) => (
              <Link
                key={service.id}
                to={`/services/${service.slug}`}
                className="text-link"
              >
                {service.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="emergency-contact">
        <h2>24/7 Emergency Response</h2>
        <a href="tel:662-781-4481" className="emergency-phone">Call: 662-781-4481</a>
        <a href="mailto:admin@amsrvcs.com" className="emergency-email">Email: admin@amsrvcs.com</a>
      </section>

      <section>
        <h2>General Inquiries</h2>
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              required 
              disabled={isSubmitting}
            />
          </div>
          <div className="form-group">
            <label htmlFor="company">Company</label>
            <input 
              type="text" 
              id="company" 
              name="company" 
              value={formData.company}
              onChange={handleChange}
              disabled={isSubmitting}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              required 
              disabled={isSubmitting}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              value={formData.phone}
              onChange={handleChange}
              disabled={isSubmitting}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows="5" 
              value={formData.message}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            ></textarea>
          </div>
          
          {status.message && (
            <div className={`form-status form-status-${status.type}`} role="alert">
              {status.message}
            </div>
          )}
          
          <button 
            type="submit" 
            className="btn btn-secondary"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        <p className="form-note">For urgent matters, call the 24/7 line. Form submissions are routed directly to American Services operations for response coordination.</p>
      </section>

      <section>
        <p className="closing-text">American Services provides direct access to experienced personnel when timing and coordination matter.</p>
      </section>
    </div>
  );
}

export default ContactUs;
