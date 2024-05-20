
        // Function to adjust the width of each image
        function adjustImageWidth(image) {
            let currentWidth = 100; // Initial width is 500px
            let increment = 1; // Increment width by 1px
            let intervalTime = 10; // Interval time in milliseconds (10 milliseconds)
            let isIncreasing = true;
        
            function animate() {
                if (isIncreasing && currentWidth <= 200) {
                    currentWidth += increment;
                    image.style.width = currentWidth + "px";
                } else if (!isIncreasing && currentWidth >= 100) {
                    currentWidth -= increment;
                    image.style.width = currentWidth + "px";
                } else {
                    isIncreasing = !isIncreasing;
                    setTimeout(animate, 1000); // Pause for 1 second before starting the next cycle
                    return;
                }
                setTimeout(animate, intervalTime); // Continue the animation loop
            }
        
            animate();
        }
        
        
        
        // Get all image elements
        let images = document.querySelectorAll(".myImage");
        // let imagess = document.querySelectorAll(".myImages");
        
        // Apply animation to each image
        images.forEach(function(image) {
            adjustImageWidth(image);
        });
        
        
        function adjustImageWidthh(image) {
            let currentWidth = 50; // Initial width is 500px
            let increment = 1; // Increment width by 1px
            let intervalTime = 10; // Interval time in milliseconds (10 milliseconds)
            let isIncreasing = true;
        
            function animate() {
                if (isIncreasing && currentWidth <= 150) {
                    currentWidth += increment;
                    image.style.width = currentWidth + "px";
                } else if (!isIncreasing && currentWidth >= 50) {
                    currentWidth -= increment;
                    image.style.width = currentWidth + "px";
                } else {
                    isIncreasing = !isIncreasing;
                    setTimeout(animate, 1000); // Pause for 1 second before starting the next cycle
                    return;
                }
                setTimeout(animate, intervalTime); // Continue the animation loop
            }
        
            animate();
        }
        
        let imagess = document.querySelectorAll(".myImages");
        
        imagess.forEach(function(image) {
            adjustImageWidthh(image);
        });
        


        // for buttons


        document.addEventListener("DOMContentLoaded", function() {
            const currentPage = window.location.pathname;
        
            const leftButton = document.getElementById('left');
            const rightButton = document.getElementById('right');
        
            function setActiveButton() {
                if (currentPage.includes('event.html')) {
                    leftButton.classList.add('active');
                    rightButton.classList.remove('active');
                } else if (currentPage.includes('index.html')) {
                    rightButton.classList.add('active');
                    leftButton.classList.remove('active');
                } else {
                    rightButton.classList.add('active'); // Default to 'Collection' if no specific page is detected
                }
            }
        
            setActiveButton();
        
            leftButton.addEventListener('click', function(event) {
                event.preventDefault();
                leftButton.classList.add('active');
                rightButton.classList.remove('active');
                setTimeout(() => {
                    window.location.href = leftButton.href;
                }, 300); // Adjust this duration to match the CSS transition duration
            });
        
            rightButton.addEventListener('click', function(event) {
                event.preventDefault();
                rightButton.classList.add('active');
                leftButton.classList.remove('active');
                setTimeout(() => {
                    window.location.href = rightButton.href;
                }, 300); // Adjust this duration to match the CSS transition duration
            });
        });
        


       