// Simple script to handle the filterable search
document.querySelector(".search-bar").addEventListener("submit", function(event) {
    event.preventDefault();
    let location = document.getElementById("location").value;
    let priceRange = document.getElementById("price-range").value;
    let propertyType = document.getElementById("property-type").value;
    
    console.log(`Search for properties in ${location}, Price range: ${priceRange}, Type: ${propertyType}`);
    // Implement the actual search filter here, maybe use AJAX for dynamic results
});

// Example of a testimonial slider (simplified)
let testimonialIndex = 0;
const testimonials = document.querySelectorAll(".testimonial");
function showTestimonial() {
    testimonials.forEach((testimonial, index) => {
        testimonial.style.display = index === testimonialIndex ? 'block' : 'none';
    });
    testimonialIndex = (testimonialIndex + 1) % testimonials.length;
}
setInterval(showTestimonial, 3000);  // Change testimonial every 3 seconds
