/*!
=========================================================
* JohnDoe Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// protfolio filters
$(window).on("load", function() {
    var t = $(".port-container");
    t.isotope({
        filter: ".new",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1
        }
    }), $(".filters a").click(function() {
        $(".filters .active").removeClass("active"), $(this).addClass("active");
        var i = $(this).attr("data-filter");
        return t.isotope({
            filter: i,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    });
});

document.addEventListener('DOMContentLoaded', () => {
  const thumbnails = document.querySelectorAll('.blog-thumbnail');
  const blogView = document.getElementById('blog-view');
  const imageView = document.getElementById('image-view');
  const backButton = document.getElementById('blog-back-button');
  const blogContent = document.getElementById('blog-content');

  const blogs = {
      blog1: `
            <h3>UNVEILING SPACEX LAUNCH SUCCESS: INSIGHTS FROM MY IBM DATA SCIENCE CAPSTONE PROJECT</h3>
          
            <h5>INTRODUCTION</h5>
            <p>Data science has become a pivotal tool for solving complex, real-world challenges. 
          During my IBM Data Science Certification journey, I had the opportunity to work on an insightful capstone project focusing on SpaceX, a company that has revolutionized space exploration. 
          The goal of the project was to predict the success of Falcon 9 first-stage landings, a critical factor in reducing the costs of space missions. 
          This article outlines my approach, findings, and key takeaways.</p>

            <h5>PROJECT OVERVIEW</h5>
            <p>SpaceX’s ability to reuse the first stage of its Falcon 9 rocket has drastically cut launch costs, making space travel more accessible. 
            My capstone project aimed to predict whether the first stage would successfully land, offering insights for competitors or stakeholders in the aerospace industry. 
            This work involved collecting, analyzing, and modeling data using tools like Python, SQL, and visualization libraries.</p>

            <h5>DATA COLLECTION</h5>
            <p>The dataset comprised information from two main sources:</p>
            
            <ol>
            <li><strong>SpaceX API:</strong> Provided detailed launch data, 
            which I retrieved and converted into a usable format using Python's Pandas library.</li>
            <li><strong>Wikipedia:</strong> Supplied additional historical data via web scraping with BeautifulSoup.</li>
            </ol>
            <p><strong>Challenges and Solutions:</strong></p>
            <ul>
            <li>Managing missing values and inconsistent data formats.</li>
            <li>Developing robust methods for filtering relevant data (e.g., focusing on Falcon 9 launches).</li>
            </ul>
            <p><strong>GitHub Repository:</strong><a href="https://github.com/williamngoy/testrepo/blob/main/data-collection-api%20(1).ipynb">Data Collection Code</a></p>

            <h5>EXPLORATORY DATA ANALYSIS (EDA)</h5>
            <p>Exploration of the data revealed fascinating insights:</p>
            <ul>
            <li><strong>Launch Success Trends:</strong>A steady increase in success rates over the years, demonstrating SpaceX’s growing efficiency.</li>
            <li><strong>Payload Mass Impacts:</strong>Heavier payloads were more successful in specific orbits, such as Low Earth Orbit (LEO).</li>
            <li><strong>Visualizations:</strong>Scatterplots, bar charts, and line charts provided clarity on relationships between payload mass, flight numbers, and launch outcomes.</li>
            </ul>

            <img src="assets/imgs/falcon9-graph.png" alt="Falcon9-First-stage-landing" width= 50%>
            <p><strong>GitHub Repository:</strong><a href="https://github.com/williamngoy/testrepo/blob/main/EDA_data_visualization.ipynb">Data Collection Code</a></p>

            <h5>INTERACTIVE VISUALIZATIONS</h5>
            <p>To bring the data to life, I created:</p>
            <ul>
            <li><strong>A Folium Map:</strong>Displayed launch sites and marked success or failure outcomes.</li>
            <li><strong>A Plotly Dashboard:</strong>Enabled users to interact with various aspects of the data, such as success rates by year or orbit.</li>
            </ul>

            <img src="assets/imgs/interactive-view-map.png" alt="Interactive Map" width= 50%>
            <p><strong>GitHub Repository:</strong><a href="https://github.com/williamngoy/testrepo/blob/main/launch_site_location_folium.ipynb">Data Collection Code</a></p>

            <h5>PREDICTIVE ANALYSIS</h5>
            <p>I tested four machine learning models: Logistic Regression, Decision Tree, SVM, and KNN. Using hyperparameter tuning, 
            the models achieved varying levels of accuracy, with Decision Tree performing the best for this dataset. Key Findings:</p>
            <ul>
            <li><strong>Model Accuracy:</strong>Decision Tree provided the highest accuracy due to its ability to capture complex decision boundaries.</li>
            </ul>
            <img src="assets/imgs/accuracy-score.png" alt="Interactive Map" width= 50%>
            <ul> <br/>
            <li><strong>Confusion Matrix:</strong>Highlighted the model’s strengths in predicting successful landings while revealing some false positives.</li>
            </ul>
            <img src="assets/imgs/confusion-matrix.png" alt="Interactive Map" width= 50%>
            <p><strong>GitHub Repository:</strong><a href="https://github.com/williamngoy/testrepo/blob/main/Machine_Learning_Prediction.ipynb">Data Collection Code</a></p>

            <h5>IMPACT AND APPLICATIONS</h5>
            <p>The project emphasized the importance of predictive analytics in industries where cost and efficiency are critical. By accurately forecasting landing outcomes, 
            companies can optimize resources and improve competitive bidding for space missions.</p>

            <h5>LESSONS LEARNED</h5>
            <p>This project taught me the end-to-end process of data science: from collecting and cleaning data to visualizing and modelling it. 
            It reinforced my skills in using APIs, web scraping, and machine learning. The hands-on experience was invaluable for my career as a data scientist.</p>

            <h5>CONCLUSION</h5>
            <p>Completing this capstone project was a rewarding journey, providing me with a deep understanding of how data science can drive innovation in space exploration. 
            I encourage aspiring data scientists to explore similar challenges and unlock the power of data in solving real-world problems.</p>
      `,
      blog2: `
          <h3>EMBRACING AI FOR STRATEGIC FORECASTING: A UNIVERSITY’S JOURNEY</h3>
          
            <h5>EXECUTIVE SUMMARY</h5>
            <p>Artificial Intelligence (AI) is reshaping industries by empowering organizations to make data-driven decisions and optimize operations. 
            This article explores the application of supervised machine learning (ML) to address a pressing challenge in higher education: predicting student enrolment trends amidst global economic uncertainty. 
            Using a case study of Bill International University, it outlines the steps to implement ML solutions and highlights the transformative benefits AI brings to decision-making and strategic planning.</p>

            <h5>INTRODUCTION</h5>
            <p>AI is transforming industries by enabling data-driven decision-making and operational efficiencies. Educational institutions face unique challenges, such as fluctuating student enrolments caused by economic crises. 
            Leveraging AI, particularly supervised machine learning, can help universities predict trends and make proactive decisions. 
            This article demonstrates how ML can address enrolment challenges through a case study of Bill International University.</p>

            <h5>AI IN ACTION: PREDICTING STUDENT ENROLLMENT TRENDS</h5>
            <p>At Bill International University, declining student enrolments, possibly due to the global economic crisis, have created uncertainty. Traditional forecasting methods struggle to account for complex economic variables. 
            Supervised machine learning offers a powerful solution, enabling accurate predictions and proactive resource planning.</p>
            
            <h5>DEFINING THE PROBLEM</h5>
            <p>The goal is to predict the number of students likely to enroll over the next two years. 
            By analyzing historical data on global economic crises and correlating it with past enrolment trends, 
            we can uncover patterns and relationships to guide decision-making.</p>

            <h5>STEPS TO IMPLEMENT A MACHINE LEARNING SOLUTION</h5>
            <ol>
                <li><strong>GATHER DATA</strong><hr> Provided detailed launch data, 
            which I retrieved and converted into a usable format using Python's Pandas library.
                <hr>
                    <ul>
                        <li>Historical GDP per capita and net income data from countries where students originate.</li>
                        <li>Trends in scholarship rates and education spending.</li>
                        <li>Enrolment data from the university over the last five years.</li>
                    </ul>
                </li>
                <li><strong>FEATURE SELECTION</strong><hr>Extract key features such as GDP per population, net income per person, and scholarship rates. These variables influence student decisions and serve as inputs for the ML model.</li>
                <li><strong>TRAINING THE MODEL</strong><hr>Use supervised ML techniques, like linear regression or random forests, to train the model. The algorithm identifies relationships between economic factors and student enrolments.</li>
                <li><strong>VALIDATION AND TESTING</strong><hr>Validate the model using a portion of the data withheld during training to ensure accuracy. This step evaluates how well the model predicts trends on unseen data.</li>
                <li><strong>DEPLOY AND PREDICT</strong><hr>Deploy the model to forecast student enrolments for the next two years. These predictions enable the university to plan resources, allocate budgets, and refine marketing strategies.</li>
            </ol>

            <h5>SUPERVISED ML IN ACTION: A PRACTICAL SOLUTION</h5>
            <p>Supervised ML algorithms excel in identifying patterns from labelled datasets. 
            For Bill International University: </p>
                    <ul>
                        <li>If GDP and net income decline in key student-sourcing regions, the model predicts a drop in enrolment.</li>
                        <li>Conversely, increases in scholarship availability might stabilize or even boost enrolment numbers.</li>
                    </ul>
            <p>This predictive capability equips the university to act strategically in addressing challenges.</p>        

            <h5>KEY INSIGHTS AND BENEFITS</h5>
            <ol>
                <li><strong>PROACTIVE DECISION-MAKING</strong><hr>AI-powered predictions allow universities to adapt marketing strategies, allocate resources efficiently, and provide timely support to students in need.</li>
                <li><strong>SCENARIO PLANNING</strong><hr>Machine learning facilitates scenario analysis, enabling decision-makers to visualize the impact of various economic trajectories.</li>
                <li><strong>SCALABILITY</strong><hr>Once implemented, the model can be updated with new data, ensuring continuous improvement and applicability to future challenges.</li>
            </ol>

            <h5>LESSONS FOR BROADER APPLICATIONS</h5>
            <p>This case study illustrates a universal truth: AI and ML are not confined to technology firms but are vital for any organization seeking to navigate uncertainty. Businesses in retail, healthcare, 
            and supply chain management can adopt similar approaches for forecasting customer demand or managing disruptions.</p>

            <h5>CONCLUSION</h5>
            <p>The integration of supervised machine learning into enrolment forecasting transforms challenges into opportunities. For Bill International University, AI empowers proactive decision-making in the face of global economic uncertainty. 
            As institutions and businesses embrace these tools, they unlock the potential to innovate, adapt, and thrive in a rapidly changing world.</p>

      `,
      blog3: `
          <h2>Culinary Delights</h2>
          <p>Discover the art of cooking and gourmet food.</p>
      `,
  };

  // Event listener for thumbnails
  thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', () => {
          const blogKey = thumbnail.getAttribute('data-blog');
          blogContent.innerHTML = blogs[blogKey];
          imageView.style.display = 'none';
          blogView.style.display = 'block';
      });
  });

  // Event listener for back button
  backButton.addEventListener('click', () => {
      blogView.style.display = 'none';
      imageView.style.display = 'flex';
  });
});

document.addEventListener('DOMContentLoaded', () => {
    const thumbnails = document.querySelectorAll('.tableau-thumbnail');
    const blogView = document.getElementById('tableau-view');
    const imageView = document.getElementById('tableau-image-view');
    const backButton = document.getElementById('tableau-back-button');
    const blogContent = document.getElementById('tableau-content');
  
    const tableau = {
        tableau1: `
            <h2>Travel Adventures</h2>
            <p>Explore the world and discover amazing places.</p>
        `,
        tableau2: `
            <h2>Tech Innovations</h2>
            <p>Learn about the latest trends in technology.</p>
        `,
        tableau3: `
            <h2>Culinary Delights</h2>
            <p>Discover the art of cooking and gourmet food.</p>
        `,
    };
  
    // Event listener for thumbnails
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            const blogKey = thumbnail.getAttribute('data-blog');
            blogContent.innerHTML = tableau[blogKey];
            imageView.style.display = 'none';
            blogView.style.display = 'block';
        });
    });
  
    // Event listener for back button
    backButton.addEventListener('click', () => {
        blogView.style.display = 'none';
        imageView.style.display = 'flex';
    });
  });

// Select all the "Read More" buttons
const moreLinks = document.querySelectorAll('.more-btn');

// Attach an event listener to each button
moreLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        // Prevent default anchor behavior
        event.preventDefault();

        // Find the corresponding hidden text (use sibling relationship)
        const hiddenText = link.previousElementSibling;

        // Toggle visibility of the hidden text
        if (hiddenText.style.display === 'none' || hiddenText.style.display === '') {
            hiddenText.style.display = 'block'; // Show the hidden text
            link.textContent = 'Read Less';    // Update button text
        } else {
            hiddenText.style.display = 'none';  // Hide the hidden text
            link.textContent = 'Read More';    // Reset button text
        }
    });
});

/* // Download CV
document.getElementById('download-btn').addEventListener('click', () => {
    window.location.href = 'http://localhost:5500/download'; // Trigger download from the backend
}); */

const scrollButton = document.getElementById('hire');
const targetSection = document.getElementById('contact');
scrollButton.addEventListener('click', () => {
    targetSection.scrollIntoView({
        behavior: 'smooth', 
        block: 'start'    
    });
});

////////////////////// form 

const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = "Form submitted successfully";
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});