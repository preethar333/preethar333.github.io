
//search button code
function performSearch() {
    var query = document.getElementById('search-input').value.toLowerCase();
    
    // Define mapping of keywords to pages
    var pageMap = {
        'home': 'index.html',
        'about': 'about.html',
        'fitness articles': 'fitness_articles.html',
        'nutrition resources': 'nutrition_resources.html',
        'workout programs': 'workout-programs.html',
        'virtual classes': 'virtual-classes.html',
        'success stories': 'success-stories.html',
        'community forum': 'community-forum.html',
        'tools & tracker': 'tools-tracker.html',
        'contact': 'contact.html'
    };

    // Search for the page
    for (var key in pageMap) {
        if (query.includes(key)) {
            window.location.href = pageMap[key];
            return;
        }
    }

    // If no match found, display a message or perform other actions
    alert('No matching page found.');
}
// newsletter
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('newsletterForm');
    const emailInput = document.getElementById('emailInput');
    const statusMessage = document.getElementById('subscriptionStatus');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = emailInput.value.trim();

        if (!isValidEmail(email)) {
            statusMessage.textContent = 'Please enter a valid email address';
            statusMessage.style.color = 'red';
        } else {
            // Simulate subscription success (replace with actual subscription logic)
            statusMessage.textContent = 'You are subscribed!';
            statusMessage.style.color = 'green';

            // Reset the form after successful submission
            form.reset();
        }
    });

    function isValidEmail(email) {
        // Basic email validation using a regular expression
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
//crousel of nutrition -resourse page
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel-slide');

    let currentIndex = 0;
    const slideWidth = slides[0].clientWidth;
    const totalSlides = slides.length;

    function goToSlide(index) {
        if (index < 0) {
            index = totalSlides - 1;
        } else if (index >= totalSlides) {
            index = 0;
        }

        carousel.style.transform = `translateX(-${index * slideWidth}px)`;
        currentIndex = index;
    }

    function changeSlide(direction) {
        goToSlide(currentIndex + direction);
    }

    // Previous button click handler
    document.querySelector('.carousel-prev').addEventListener('click', function() {
        changeSlide(-1);
    });

    // Next button click handler
    document.querySelector('.carousel-next').addEventListener('click', function() {
        changeSlide(1);
    });

    // Automatic sliding every 5 seconds
    setInterval(function() {
        changeSlide(1);
    }, 5000);
});

//contact form
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const statusMessage = document.getElementById('statusMessage');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting

        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // Simple validation (you can add more validation as needed)
        if (!name || !email || !message) {
            statusMessage.textContent = 'Please fill in all fields.';
            statusMessage.style.color = 'red';
            return;
        }

        // Send email (simulate sending email using console.log)
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);

        // Clear form fields
        contactForm.reset();

        // Display success message
        statusMessage.textContent = 'Message sent successfully!';
        statusMessage.style.color = 'green';
    });
});

//toos
// Function to log weight
function logWeight() {
    const weight = document.getElementById('weight').value;
    if (weight) {
        const weightLog = document.getElementById('weight-log');
        const logItem = document.createElement('li');
        logItem.textContent = `Weight: ${weight} kg`;
        weightLog.appendChild(logItem);
    }
}

// Function to log workouts
function logWorkout() {
    const workout = document.getElementById('workout').value;
    if (workout) {
        const workoutLog = document.getElementById('workout-log');
        const logItem = document.createElement('li');
        logItem.textContent = `Workout: ${workout}`;
        workoutLog.appendChild(logItem);
    }
}

// Function to log nutrition
function logNutrition() {
    const nutrition = document.getElementById('nutrition').value;
    if (nutrition) {
        const nutritionLog = document.getElementById('nutrition-log');
        const logItem = document.createElement('li');
        logItem.textContent = `Nutrition: ${nutrition}`;
        nutritionLog.appendChild(logItem);
    }
}

// Function to calculate BMI
function calculateBMI() {
    const weight = document.getElementById('bmi-weight').value;
    const height = document.getElementById('bmi-height').value / 100;
    if (weight && height) {
        const bmi = (weight / (height * height)).toFixed(2);
        document.getElementById('bmi-result').textContent = `Your BMI is ${bmi}`;
    }
}

// Function to calculate calories
function calculateCalories() {
    const weight = document.getElementById('cal-weight').value;
    const height = document.getElementById('cal-height').value;
    const age = document.getElementById('cal-age').value;
    const gender = document.getElementById('cal-gender').value;
    let bmr;

    if (weight && height && age && gender) {
        if (gender === 'male') {
            bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
        } else {
            bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
        }

        document.getElementById('cal-result').textContent = `Your daily caloric needs are ${Math.round(bmr)} calories`;
    }
}

// Function to calculate heart rate
function calculateHeartRate() {
    const age = document.getElementById('hr-age').value;
    if (age) {
        const maxHeartRate = 220 - age;
        const heartRateZones = {
            'Moderate Intensity': `${Math.round(maxHeartRate * 0.5)} - ${Math.round(maxHeartRate * 0.7)} bpm`,
            'Vigorous Intensity': `${Math.round(maxHeartRate * 0.7)} - ${Math.round(maxHeartRate * 0.85)} bpm`
        };

        document.getElementById('hr-result').innerHTML = `
            Max Heart Rate: ${maxHeartRate} bpm<br>
            Moderate Intensity: ${heartRateZones['Moderate Intensity']}<br>
            Vigorous Intensity: ${heartRateZones['Vigorous Intensity']}
        `;
    }
}
