/* ============================================================
   Ubuntu Eats – Main JavaScript
   Handles: Navigation, Menu Tabs, Form Validation,
            Scroll Animations, Enquiry Toggle
   Author: Nomvuselelo Khumalo (ST10523069)
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ===================================================
     1. MOBILE NAV TOGGLE
  =================================================== */
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav   = document.querySelector('#main-nav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      const isOpen = mainNav.classList.toggle('nav-open');
      navToggle.setAttribute('aria-expanded', isOpen.toString());
      navToggle.innerHTML = isOpen ? '&#10005;' : '&#9776;';
    });

    // Close nav when a link is clicked (mobile)
    mainNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mainNav.classList.remove('nav-open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.innerHTML = '&#9776;';
      });
    });

    // Close nav when clicking outside
    document.addEventListener('click', function (e) {
      if (!mainNav.contains(e.target) && !navToggle.contains(e.target)) {
        mainNav.classList.remove('nav-open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.innerHTML = '&#9776;';
      }
    });
  }


  /* ===================================================
     2. STICKY HEADER SHADOW ON SCROLL
  =================================================== */
  const siteHeader = document.querySelector('.site-header');
  if (siteHeader) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 10) {
        siteHeader.style.boxShadow = '0 4px 24px rgba(42,31,26,0.18)';
      } else {
        siteHeader.style.boxShadow = '0 2px 12px rgba(42,31,26,0.10)';
      }
    });
  }


  /* ===================================================
     3. MENU TAB SWITCHING (menu.html)
  =================================================== */
  const tabButtons = document.querySelectorAll('.tab-btn');
  const menuSections = document.querySelectorAll('.menu-section');

  if (tabButtons.length > 0) {
    tabButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const targetTab = btn.getAttribute('data-tab');

        // Update button states
        tabButtons.forEach(function (b) {
          b.classList.remove('tab-btn--active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('tab-btn--active');
        btn.setAttribute('aria-selected', 'true');

        // Show/hide sections
        menuSections.forEach(function (section) {
          if (section.id === 'tab-' + targetTab) {
            section.classList.remove('menu-section--hidden');
          } else {
            section.classList.add('menu-section--hidden');
          }
        });
      });
    });
  }


  /* ===================================================
     4. ENQUIRY FORM TOGGLE (enquiry.html)
  =================================================== */
  const btnReservation = document.getElementById('btn-reservation');
  const btnCatering    = document.getElementById('btn-catering');
  const formReservation = document.getElementById('form-reservation');
  const formCatering    = document.getElementById('form-catering');

  if (btnReservation && btnCatering) {
    btnReservation.addEventListener('click', function () {
      btnReservation.classList.add('toggle-btn--active');
      btnReservation.setAttribute('aria-pressed', 'true');
      btnCatering.classList.remove('toggle-btn--active');
      btnCatering.setAttribute('aria-pressed', 'false');
      formReservation.classList.remove('form-wrapper--hidden');
      formCatering.classList.add('form-wrapper--hidden');
    });

    btnCatering.addEventListener('click', function () {
      btnCatering.classList.add('toggle-btn--active');
      btnCatering.setAttribute('aria-pressed', 'true');
      btnReservation.classList.remove('toggle-btn--active');
      btnReservation.setAttribute('aria-pressed', 'false');
      formCatering.classList.remove('form-wrapper--hidden');
      formReservation.classList.add('form-wrapper--hidden');
    });
  }


  /* ===================================================
     5. FORM VALIDATION HELPERS
  =================================================== */
  /**
   * Show an error message below a field
   * @param {string} fieldId  - input element id
   * @param {string} message  - error text to display
   */
  function showError(fieldId, message) {
    var field = document.getElementById(fieldId);
    var errEl = document.getElementById(fieldId + '-error');
    if (field) field.classList.add('input-error');
    if (errEl) errEl.textContent = message;
  }

  /**
   * Clear an error from a field
   * @param {string} fieldId - input element id
   */
  function clearError(fieldId) {
    var field = document.getElementById(fieldId);
    var errEl = document.getElementById(fieldId + '-error');
    if (field) field.classList.remove('input-error');
    if (errEl) errEl.textContent = '';
  }

  /**
   * Validate an email address format
   * @param {string} email
   * @returns {boolean}
   */
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  }

  /**
   * Validate a phone number (9-15 digits, optional +)
   * @param {string} phone
   * @returns {boolean}
   */
  function isValidPhone(phone) {
    return /^[\+]?[\d\s\-]{9,15}$/.test(phone.trim());
  }

  /**
   * Check that a date is today or in the future
   * @param {string} dateStr
   * @returns {boolean}
   */
  function isFutureDate(dateStr) {
    if (!dateStr) return false;
    var selected = new Date(dateStr);
    var today    = new Date();
    today.setHours(0, 0, 0, 0);
    return selected >= today;
  }

  // Live validation: clear errors on input
  document.querySelectorAll('.styled-form input, .styled-form select, .styled-form textarea').forEach(function (el) {
    el.addEventListener('input', function () {
      el.classList.remove('input-error');
      var errEl = document.getElementById(el.id + '-error');
      if (errEl) errEl.textContent = '';
    });
  });


  /* ===================================================
     6. RESERVATION FORM VALIDATION & SUBMIT
  =================================================== */
  var reservationForm = document.getElementById('reservationForm');
  if (reservationForm) {
    reservationForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var valid = true;

      // First name
      var fname = document.getElementById('res-fname').value.trim();
      if (fname.length < 2) {
        showError('res-fname', 'Please enter your first name (at least 2 characters).');
        valid = false;
      } else { clearError('res-fname'); }

      // Last name
      var lname = document.getElementById('res-lname').value.trim();
      if (lname.length < 2) {
        showError('res-lname', 'Please enter your last name (at least 2 characters).');
        valid = false;
      } else { clearError('res-lname'); }

      // Email
      var email = document.getElementById('res-email').value.trim();
      if (!isValidEmail(email)) {
        showError('res-email', 'Please enter a valid email address.');
        valid = false;
      } else { clearError('res-email'); }

      // Phone
      var phone = document.getElementById('res-phone').value.trim();
      if (!isValidPhone(phone)) {
        showError('res-phone', 'Please enter a valid phone number.');
        valid = false;
      } else { clearError('res-phone'); }

      // Location
      var location = document.getElementById('res-location').value;
      if (!location) {
        showError('res-location', 'Please select a branch.');
        valid = false;
      } else { clearError('res-location'); }

      // Guests
      var guests = document.getElementById('res-guests').value;
      if (!guests) {
        showError('res-guests', 'Please select the number of guests.');
        valid = false;
      } else { clearError('res-guests'); }

      // Date
      var date = document.getElementById('res-date').value;
      if (!isFutureDate(date)) {
        showError('res-date', 'Please select a valid future date.');
        valid = false;
      } else { clearError('res-date'); }

      // Time
      var time = document.getElementById('res-time').value;
      if (!time) {
        showError('res-time', 'Please select a preferred time.');
        valid = false;
      } else { clearError('res-time'); }

      if (valid) {
        // Hide form, show success
        reservationForm.style.display = 'none';
        document.getElementById('res-success').style.display = 'block';
        window.scrollTo({ top: reservationForm.parentElement.offsetTop - 100, behavior: 'smooth' });
      }
    });
  }


  /* ===================================================
     7. CATERING FORM VALIDATION & SUBMIT
  =================================================== */
  var cateringForm = document.getElementById('cateringForm');
  if (cateringForm) {
    cateringForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var valid = true;

      // Name
      var name = document.getElementById('cat-name').value.trim();
      if (name.length < 2) {
        showError('cat-name', 'Please enter your full name.');
        valid = false;
      } else { clearError('cat-name'); }

      // Email
      var email = document.getElementById('cat-email').value.trim();
      if (!isValidEmail(email)) {
        showError('cat-email', 'Please enter a valid email address.');
        valid = false;
      } else { clearError('cat-email'); }

      // Phone
      var phone = document.getElementById('cat-phone').value.trim();
      if (!isValidPhone(phone)) {
        showError('cat-phone', 'Please enter a valid phone number.');
        valid = false;
      } else { clearError('cat-phone'); }

      // Event type
      var eventType = document.getElementById('cat-event').value;
      if (!eventType) {
        showError('cat-event', 'Please select an event type.');
        valid = false;
      } else { clearError('cat-event'); }

      // Guest count
      var guestCount = parseInt(document.getElementById('cat-guests').value);
      if (isNaN(guestCount) || guestCount < 10) {
        showError('cat-guests', 'Minimum 10 guests required for catering.');
        valid = false;
      } else { clearError('cat-guests'); }

      // Date
      var date = document.getElementById('cat-date').value;
      if (!isFutureDate(date)) {
        showError('cat-date', 'Please select a valid future event date.');
        valid = false;
      } else { clearError('cat-date'); }

      // Venue
      var venue = document.getElementById('cat-venue').value.trim();
      if (venue.length < 5) {
        showError('cat-venue', 'Please enter the venue address.');
        valid = false;
      } else { clearError('cat-venue'); }

      // Message
      var message = document.getElementById('cat-message').value.trim();
      if (message.length < 20) {
        showError('cat-message', 'Please provide more details about your event (at least 20 characters).');
        valid = false;
      } else { clearError('cat-message'); }

      if (valid) {
        cateringForm.style.display = 'none';
        document.getElementById('cat-success').style.display = 'block';
        window.scrollTo({ top: cateringForm.parentElement.offsetTop - 100, behavior: 'smooth' });
      }
    });
  }


  /* ===================================================
     8. CONTACT FORM VALIDATION & SUBMIT
  =================================================== */
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var valid = true;

      // Name
      var name = document.getElementById('con-name').value.trim();
      if (name.length < 2) {
        showError('con-name', 'Please enter your name.');
        valid = false;
      } else { clearError('con-name'); }

      // Email
      var email = document.getElementById('con-email').value.trim();
      if (!isValidEmail(email)) {
        showError('con-email', 'Please enter a valid email address.');
        valid = false;
      } else { clearError('con-email'); }

      // Subject
      var subject = document.getElementById('con-subject').value.trim();
      if (subject.length < 5) {
        showError('con-subject', 'Please enter a subject (at least 5 characters).');
        valid = false;
      } else { clearError('con-subject'); }

      // Message
      var message = document.getElementById('con-message').value.trim();
      if (message.length < 20) {
        showError('con-message', 'Please enter a message (at least 20 characters).');
        valid = false;
      } else { clearError('con-message'); }

      if (valid) {
        contactForm.style.display = 'none';
        document.getElementById('con-success').style.display = 'block';
      }
    });
  }


  /* ===================================================
     9. SCROLL REVEAL ANIMATION
  =================================================== */
  var animatedEls = document.querySelectorAll(
    '.dish-card, .testimonial-card, .mv-card, .team-card, .package-card, .step, .stat, .menu-item, .location-card, .timeline-item'
  );

  if ('IntersectionObserver' in window && animatedEls.length > 0) {
    // Set initial state
    animatedEls.forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    animatedEls.forEach(function (el) {
      observer.observe(el);
    });
  }


  /* ===================================================
     10. SET MINIMUM DATE TO TODAY FOR DATE INPUTS
  =================================================== */
  var dateInputs = document.querySelectorAll('input[type="date"]');
  if (dateInputs.length > 0) {
    var today = new Date();
    var yyyy  = today.getFullYear();
    var mm    = String(today.getMonth() + 1).padStart(2, '0');
    var dd    = String(today.getDate()).padStart(2, '0');
    var minDate = yyyy + '-' + mm + '-' + dd;
    dateInputs.forEach(function (input) {
      input.setAttribute('min', minDate);
    });
  }

}); // end DOMContentLoaded
