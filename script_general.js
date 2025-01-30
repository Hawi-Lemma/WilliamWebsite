
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
            <p>SpaceX&#39;s ability to reuse the first stage of its Falcon 9 rocket has drastically cut launch costs, making space travel more accessible. 
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
            <li><strong>Launch Success Trends:</strong>A steady increase in success rates over the years, demonstrating SpaceX&#39;s growing efficiency.</li>
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
            <li><strong>Confusion Matrix:</strong>Highlighted the model&#39;s strengths in predicting successful landings while revealing some false positives.</li>
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
          <h3>EMBRACING AI FOR STRATEGIC FORECASTING: A UNIVERSITY&#39;S JOURNEY</h3>
          
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
                <li><strong>GATHER DATA</strong><br>Provided detailed launch data, 
            which I retrieved and converted into a usable format using Python's Pandas library.
                
                    <ul>
                        <li>Historical GDP per capita and net income data from countries where students originate.</li>
                        <li>Trends in scholarship rates and education spending.</li>
                        <li>Enrolment data from the university over the last five years.</li>
                    </ul>
                </li> <br>
                <li><strong>FEATURE SELECTION</strong><br>Extract key features such as GDP per population, net income per person, and scholarship rates. These variables influence student decisions and serve as inputs for the ML model.</li><br>
                <li><strong>TRAINING THE MODEL</strong><br>Use supervised ML techniques, like linear regression or random forests, to train the model. The algorithm identifies relationships between economic factors and student enrolments.</li><br>
                <li><strong>VALIDATION AND TESTING</strong><br>Validate the model using a portion of the data withheld during training to ensure accuracy. This step evaluates how well the model predicts trends on unseen data.</li><br>
                <li><strong>DEPLOY AND PREDICT</strong><br>Deploy the model to forecast student enrolments for the next two years. These predictions enable the university to plan resources, allocate budgets, and refine marketing strategies.</li>
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
                <li><strong>PROACTIVE DECISION-MAKING</strong><br>AI-powered predictions allow universities to adapt marketing strategies, allocate resources efficiently, and provide timely support to students in need.</li><br>
                <li><strong>SCENARIO PLANNING</strong><br>Machine learning facilitates scenario analysis, enabling decision-makers to visualize the impact of various economic trajectories.</li><br>
                <li><strong>SCALABILITY</strong><br>Once implemented, the model can be updated with new data, ensuring continuous improvement and applicability to future challenges.</li>
            </ol>

            <h5>LESSONS FOR BROADER APPLICATIONS</h5>
            <p>This case study illustrates a universal truth: AI and ML are not confined to technology firms but are vital for any organization seeking to navigate uncertainty. Businesses in retail, healthcare, 
            and supply chain management can adopt similar approaches for forecasting customer demand or managing disruptions.</p>

            <h5>CONCLUSION</h5>
            <p>The integration of supervised machine learning into enrolment forecasting transforms challenges into opportunities. For Bill International University, AI empowers proactive decision-making in the face of global economic uncertainty. 
            As institutions and businesses embrace these tools, they unlock the potential to innovate, adapt, and thrive in a rapidly changing world.</p>

      `,
      blog3: `
        <h3>DIVERSITY, EQUITY, AND INCLUSION IN HIGHER EDUCATION: 
        INSIGHTS FROM INTERNATIONAL STUDENTS IN NORTHERN CYPRUS</h3>

        <h5>ABSTRACT</h5>
        <p>This study explores the international student&#39;s perceptions of Diversity, Equity, and Inclusion (DEI). 
        By conducting a field study of universities in Northern Cyprus, this study is the first to examine this topic in the region, focusing on three major international universities. 
        We gathered primary data through in-depth interviews with 30 international students from different backgrounds and countries, using open-ended questions designed to elicit detailed responses. 
        Additionally, we also interviewed some professors to gain a broader overview and comprehensive perspective.</p>

        <p>The findings of our research reveal both the positive impacts and challenges associated with studying in a multicultural environment. 
        The data disclosed that there is a strong appreciation among students for the opportunity to study in a multicultural setting. Many students value the diverse perspectives and cultural exchanges that considerably enhance their educational experience and personal growth. 
        However, language barriers, cultural misunderstandings, and difficulties in social integration are some of the challenges encountered in the multicultural environment. Indeed, these challenges often isolate students and hinder their ability to fully engage with their peers and impact their academic success.</p>

        <p>This study contributes to the growing literature body about Diversity, Equity, and Inclusion perceptions among international students in Northern Cyprus. 
        Moreover, the findings provide practical recommendations for universities to improve the academic journey and experiences of international students, creating a more inclusive and supportive environment for all students.</p>

        <h5>INTRODUCTION</h5>
        <p>Diversity, Equity, and Inclusion (DEI) are essential principles for creating enriching educational environments. 
        These principles significantly impact international students, shaping their academic success, personal growth, and sense of belonging. 
        This article explores findings from a study conducted in Northern Cyprus, focusing on international students&#39; perceptions of DEI, the challenges they face, and opportunities for improvement.</p>

        <h5>THE VALUE OF MULTICULTURAL ENVIRONMENTS</h5>
        <p>Students in Northern Cyprus reported that interactions with peers from different backgrounds improved their communication and problem-solving skills, better preparing them for global careers. 
        As one participant stated: 'These interactions are invaluable in developing adaptability and resilience—traits essential for success in an interconnected world.'</p>

        <ol>
            <li><strong>Enhanced Learning Experiences</strong><br>Interacting with peers from different cultural and national backgrounds enriched classroom discussions and collaborative projects.</li>
            <li><strong>Personal Growth</strong><br>Exposure to diverse viewpoints helped students develop empathy and adaptability, essential skills in a globalized world.</li>
            <li><strong>Building Global Networks</strong><br>Collaborative projects and multicultural events facilitated meaningful connections, providing both social and professional opportunities.</li>
        </ol>    

        <h5>Students quotes:</h5>
        <ul>
            <li><i>"Living and studying with people from different cultures has made me more empathetic and open-minded."</i></li>
            <li><i>"I now have friends from all over the world, which I think is incredible."</i></li>
            <li><i>"Networking here has been amazing for my future career."</i></li>
            <li><i>"Being in a multicultural environment has helped me become more understanding and flexible."</i></li>
            <li><i>"I&#39;ve learned so much about others&#39; cultures, which I didn&#39;t know before."</i></li>
            <li><i>"I really like the exposure to different cultures; it makes my learning experience richer."</i></li>
            <li><i>"Learning with students from different countries helps me see things differently."</i></li>
        </ul>

        <h5>CHALLENGES FACED BY INTERNATIONAL STUDENTS</h5>
        <p>Despite the benefits, international students face significant barriers in integrating into the multicultural environment:</p>

        <ol>
            <li><strong>Language Barriers:</strong><br>Limited proficiency in English and the local language (Turkish) creates communication challenges in academic and social settings.</li>
            <li><strong>Cultural Misunderstandings:</strong><br>Misaligned cultural norms and practices sometimes lead to social isolation.</li>
            <li><strong>Inequities in Treatment:</strong><br>Favouritism toward local students in scholarships and classroom interactions fuels a sense of exclusion among international students.</li>
        </ol> 
        
        <h5>Students quotes:</h5>
        <ul>
            <li><i>"Language is a big issue for me; sometimes I can&#39;t understand what&#39;s being said in Turkish."</i></li>
            <li><i>"Even though English is used, not everyone is fluent, and that causes problems."</i></li>
            <li><i>"I feel left out sometimes because people don&#39;t understand my culture."</i></li>
            <li><i>"There are times when cultural differences make things awkward."</i></li>
            <li><i>"Favoritism toward local students, especially in scholarships and academic opportunities, left international students feeling disadvantaged."</i></li>
            <li><i>"Local students get more scholarships&#59; we feel overlooked."</i></li>
            <li><i>"I sometimes feel like we&#39;re treated differently, and not in a good way."</i></li>
        </ul>

        <h5>RECOMMENDATIONS FOR IMPROVEMENT</h5>
        <p>To address the challenges identified, universities can adopt the following strategies:</p>

        <ol>
            <li><strong>Enhancing Language Support</strong><br>Provide comprehensive language programs in English and Turkish for international students.
                <h5>Students quotes:</h5>
                <ul>
                    <li><i>"Having Turkish classes would make integration much easier."</i></li>
                    <li><i>"A support system for language would be very helpful for new students."</i></li>
                </ul>
            </li> <hr>
            <li><strong>Promoting Cultural Integration</strong><br>Organize multicultural events and team-building activities to encourage interaction among diverse student groups.
                <h5>Students quotes:</h5>
                <ul>
                    <li><i>"Events where everyone can share their culture would help us connect better."</i></li>
                    <li><i>"Cultural festivals or similar events could make us feel more included."</i></li>
                </ul>
            </li> <hr>
            <li><strong>Ensuring Fairness and Equity</strong><br>Standardize financial aid policies to create equitable opportunities for all students.
                <h5>Students quotes:</h5>
                <ul>
                    <li><i>"Scholarship opportunities should be fair for everyone, not just locals."</i></li>
                    <li><i>"We need to feel like we&#39;re being given the same chances as local students."</i></li>
                </ul>
            </li> <hr>
            <li><strong>Develop Inclusive Policies</strong><br>Establish a dedicated office for DEI initiatives to address student concerns and implement targeted programs.
                <h5>Students quotes:</h5>
                <ul>
                    <li><i>"An office that handles these issues would make things better for us."</i></li>
                    <li><i>"Policies that consider everyone&#39;s needs would go a long way."</i></li>
                </ul>
            </li>
        </ol> 

        <h5>CONCLUSION</h5>
        <p>The research emphasizes the significance of Diversity, Equity, and Inclusion (DEI) in higher education and its role in creating equitable and supportive learning environments for all students. 
        Addressing the challenges faced by international students requires intentional and strategic efforts from universities. These efforts should aim to remove barriers to participation, foster understanding across cultures, and ensure fair treatment of all students. 
        By doing so, institutions can create an environment where diversity is not only celebrated but is a source of strength and growth for everyone involved.</p>

        <h5>REFERENCES</h5>
        <ul>
            <li>Bronfenbrenner, U. &#40;1979&#41;.<i>The Ecology of Human Development: Experiments by Nature and Design.</i>Harvard University Press.</li>
            <li>Deci, E. L., & Ryan, R. M. &#40;2000&#41;. The "what" and "why" of goal pursuits: Human needs and the self-determination of behaviour.<i> Psychological Inquiry,</i>11(4), 227-268.</li>
            <li>Glass, C. R., & Westmont, C. M. &#40;2014&#41;. Comparative effects of belongingness on the academic success and cross-cultural interactions of domestic and international students.<i>International Journal of Intercultural Relations, 38</i>106-119.</li>
            <li>Harper, S. R., & Hurtado, S. &#40;2007&#41;. Nine themes in campus racial climates and implications for institutional transformation.<i>New Directions for Student Services, (120),</i>7-24.</li>
            <li>Ryan, R. M., & Deci, E. L. &#40;2017&#41;.<i>Self-Determination Theory: Basic Psychological Needs in Motivation, Development, and Wellness. </i>Guilford Publications.</li>
            <li>UNESCO &#40;2023&#41;. <i>Education and Equity: Policy frameworks for inclusive education.</i>United Nations Educational, Scientific and Cultural Organizations.</li>
        </ul>

      `,
      blog4: `
      <h3>LEVERAGING STRATEGIC MANAGEMENT FOR ORGANIZATIONAL SURVIVAL: INSIGHTS FROM BRASSERIES SIMBA</h3>

      <h5>ABSTRACT</h5>
      <p>This study examines how strategic management enables organizational resilience in volatile environments, focusing on Brasseries Simba in the Democratic Republic of Congo. 
      Using tools like PESTEL and SWOT analyses, ISO 9001:2015 compliance, and cultural alignment, the company has navigated market fluctuations, technological advancements, and socio-political challenges to maintain industry leadership. 
      The findings highlight the role of strategic diagnostics in decision-making, continuous improvement, and enabling employee alignment with organizational goals. This study contributes to strategic management literature in emerging markets, offering practical recommendations for businesses to thrive in uncertain environments.</p>

      <h5>INTRODUCTION</h5>
      <p>In an increasingly volatile global economy, organizations face relentless challenges, economic instability, political uncertainty, intense competition, and rapid technological advancements. 
      Yet, some businesses not only survive but thrive by leveraging strategic management as a tool for resilience and growth. A prime example is Brasseries Simba, a beverage company in the Democratic Republic of Congo (DRC), 
      which has maintained industry leadership despite formidable obstacles.</p>

      <p>This article explores how Brasseries Simba utilized strategic tools like SWOT and PESTEL analysis, integrated ISO standards, and aligned strategies with organizational culture. 
      These insights provide actionable guidance for managers navigating complexity and uncertainty in their industries.</p>

      <h5>DIAGNOSING THE LANDSCAPE: STRATEGIC TOOLS IN PRACTICE</h5>
      <p>A robust strategy begins with understanding the factors affecting an organization. 
      Brasseries Simba&#39;s approach illustrates the power of diagnostic frameworks such as PESTEL and SWOT analysis.</p>

      <h5>PESTEL ANALYSIS: MAPPING THE EXTERNAL ENVIRONMENT</h5>
        <p>Brasseries Simba used PESTEL analysis to evaluate external forces shaping its operations, revealing key dynamics:</p>
            <ul>
                <li><strong>Political and Economic Pressures:</strong> Frequent political instability and inflation disrupted supply chains and pricing strategies. 
                The company pre-emptively secured raw materials and adjusted product prices to align with currency fluctuations.</li>
                <li><strong>Technological Evolution:</strong> Strategic investments in production upgrades ensured alignment with global quality benchmarks, enhancing operational efficiency.</li>
                <li><strong>Ecological Considerations:</strong> Seasonal production schedules optimized resource use while meeting demand fluctuations, balancing sustainability with profitability.</li>
            </ul>

        <h5>SWOT ANALYSIS: LEVERAGING INTERNAL INSIGHTS</h5>
            <p>A SWOT analysis helped Brasseries Simba identify critical internal and external dynamics:</p>
            <ul>
                <li><strong>Strengths:</strong>Established brand recognition and compliance with ISO 9001:2015 standards bolstered operational credibility.</li>
                <li><strong>Weaknesses:</strong>Resistance to change among employees and occasional delays in supplier payments posed internal challenges.</li>
                <li><strong>Opportunities:</strong>Geographic advantages and ISO certification positioned the company for market expansion and competitiveness.</li>
                <li><strong>Threats:</strong>Rising competition requires continuous innovation in product offerings and pricing strategies.</li>
            </ul>
            <p>By combining these tools, Brasseries Simba developed a strategy uniquely suited to its operating environment and objectives.</p>

        <h5>ISO STANDARDS: A COMMITMENT TO EXCELLENCE</h5>
            <p>Brasseries Simba&#39;s adherence to ISO 9001:2015 standards underscored its commitment to quality management, yielding several benefits:</p>
            <ul>
                <li><strong>Operational Efficiency:</strong>Streamlined processes reduced waste and enhanced production output.</li>
                <li><strong>Customer Trust:</strong>Consistent product quality strengthens customer loyalty and satisfaction.</li>
                <li><strong>Market Credibility:</strong>Compliance with international standards bolstered the company&#39;s reputation and competitiveness.</li>
            </ul>
            <p>ISO principles also fostered a culture of continuous improvement, enabling Brasseries Simba to dynamically respond to market demands.</p>

            <h5>INSIGHTS FOR MANAGERS EVERYWHERE</h5>
            <p>Brasseries Simba&#39;s adherence to ISO 9001:2015 standards underscored its commitment to quality management, yielding several benefits:</p>
                <ol>
                    <li><strong>Use Diagnostics for Informed Decision-Making:</strong>Tools like PESTEL and SWOT provide clarity on both external and internal dynamics.</li>
                    <li><strong>Prioritize Cultural Alignment:</strong>Transparent communication and training bridge the gap between strategy design and execution.</li>
                    <li><strong>Commit to Continuous Improvement:</strong>Frameworks like ISO standards embed adaptability and operational excellence into organizational processes.</li>
                    <li><strong>Stay Proactive:</strong>Diversify product lines and adjust pricing strategies to outpace competitors and meet shifting market needs.</li>
                    <li><strong>Iterate and Improve:</strong>Adopt cyclical approaches like PDCA &#40;Plan-Do-Check-Act&#41; to continually refine strategies and processes.</li>
                </ol>    

            <h5>CONCLUSION</h5>
            <p>Brasseries Simba&#39;s journey demonstrates the transformative power of strategic management in uncertain environments. 
            By diagnosing challenges, aligning strategy with culture, and committing to continuous improvement, the company has sustained its leadership for nearly a century.</p>
            <p>For managers worldwide, the lesson is clear: adaptability, informed decision-making, and a unified culture are not just survival mechanisms, they are the keys to long-term success. 
            Organizations that embrace these principles can navigate uncertainty and emerge stronger, just as Brasseries Simba has done.</p>

            <h5>REFERENCES AND SOURCES</h5>
      <ol>
          <li>Mintzberg, H. &#40;1987&#41;. The Strategy Concept I: Five Ps for Strategy,<i>California Management Review.</i></li>
          <li>Porter, M.E. &#40;2008&#41;. The Five Competitive Forces That Shape Strategy,<i>Harvard Business Review,</i>January 2008.</li>
          <li>ISO 9001:2015 Standards Documentation,<i>International Organisation for Standardisation.</i></li>
          <li>J.P. Helfer, M. Kalika, J. Orsoni &#40;2010&#41;.<i> Management Stratégique: Concepts et Cas.</i></li>
          <li>Research findings and observations from Brasseries Simba &#40;2016&#8208;2019&#40;.</li>
      </ol>

    `,
    blog5: `
      <h3>THE POWER OF PREPARATION: HOW STRATEGY AND PROJECT REQUIREMENT DOCUMENTS DRIVE SUCCESS</h3>

      <p>In project management, success rarely happens by chance. 
      It stems from thorough planning, effective communication, and a clear path forward. 
      Strategy documents and project requirement documents serve as essential tools, ensuring teams stay aligned and focused. 
      By offering structure, clarity, and guidance, these documents turn broad ideas into achievable outcomes.</p>

      <ol start="1">
        <li><strong>STRATEGY DOCUMENTS: A FRAMEWORK FOR DIRECTION</strong>
        <p>Starting a project without a clear guide is like embarking on a journey without a map. Strategy documents provide the framework, outlining the project&#39;s purpose, main objectives, and team roles.</p>
        <ol>
            <li>Understanding Roles and Responsibilities
            <p>The foundation lies in defining who is responsible for what. Tools like the <strong>Sign-off Matrix</strong> help clarify decision-making roles and ensure the team knows whom to consult for approvals.</p>
            <p>A <strong>Sign-off Matrix</strong> is a project management tool designed to clarify roles, responsibilities, and approval processes within a project. By explicitly outlining who has the authority to approve decisions, who provides input, and who needs to be informed, it eliminates confusion and ensures smoother collaboration across teams.</p>
                <div class="table-responsive">
                    <table class="table table-bordered"">
                        <thead>
                            <tr>
                                <th>Ask/Decision</th>
                                <th>Responsible&#40;R&#41;</th>
                                <th>Accountable&#40;A&#41;</th>
                                <th>Consulted&#40;C&#41;</th>
                                <th>Informed&#40;I&#41;</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Define project scope</td>
                                <td>Project Manager</td>
                                <td>Sponsor</td>
                                <td>Subject Matter Experts</td>
                                <td>All Stakeholders</td>
                            </tr>
                            <tr>
                                <td>Approve project budget</td>
                                <td>Finance Team</td>
                                <td>CFO</td>
                                <td>Project Manager</td>
                                <td>Executive Team</td>
                            </tr>
                            <tr>
                                <td>Finalize deliverables</td>
                                <td>Team Lead</td>
                                <td>Project Sponsor</td>
                                <td>Quality Assurance Team</td>
                                <td>Stakeholders</td>
                            </tr>
                            <tr>
                                <td>Sign-off on requirements</td>
                                <td>Business Analyst</td>
                                <td>Project Sponsor</td>
                                <td>End Users, Legal Team</td>
                                <td>Development Team</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </li>
            <li>Maintaining Focus with Clear Ownership</li>
            <p>Strong ownership ensures the project stays aligned with its goals. The <strong>Proposer</strong>, often the strategy document&#39;s lead advocate, monitors its direction. Additionally, stating the document&#39;s status, such as draft, under review, or implemented, keeps stakeholders informed about progress.</p>
            <li>Data as the Basis for Decisions</li>
            <p>Reliable data strengthens any strategy. By specifying <strong>Primary and Secondary Datasets,</strong> strategy documents identify critical information and sources. This approach minimizes irrelevant details and helps focus on actionable insights.</p>
        </ol>
        </li>
        <li><strong>PROJECT REQUIREMENTS: TRANSLATING VISION INTO ACTION</strong>
            <p>While strategy documents outline the broader vision, project requirement documents focus on the steps needed to achieve it. These documents clearly define the tasks, objectives, and resources required.</p>
        <ol>
            <li>Establishing Purpose: Why the Project Matters</li>
                <p>Every project must address the question: Why is this being done? This section identifies the business need. For instance, creating a centralized data dashboard could improve decision-making by consolidating scattered information.</p>

            <li>Highlighting Dependencies</li>
                <p>Projects often rely on external tools, collaborations, or specific datasets. Identifying these dependencies early helps ensure the required support is available when needed.</p>

            <li>Addressing Stakeholder Needs</li>
                <p>Stakeholders have varying priorities. By categorizing features as <strong>Required, Desired, or Nice-to-have,</strong>, the team can allocate resources effectively. Essential functions might include real-time updates, while exportable reports could be optional.</p>
        </ol>
        </li>
        <li><strong>NEXT STEPS: TURNING PLANS INTO ACTION</strong>
            <p>Once the strategy and requirements are in place, the next focus is execution. A few practical steps help move ideas into action.</p>
        <ol>
            <li>Defining Clear Goals</li>
            <p>Clear objectives keep the project relevant and focused. Whether the documents are tailored for a specific initiative or serve as templates, clarity helps avoid unnecessary changes or distractions.</p>
            <li>Distilling the Essentials</li>
            <p>With so much information available, it&#39;s important to emphasize what truly matters. Key metrics, target audiences, and core functions should be outlined to provide a concise guide for the team.</p>
            <li>Building a Structured Framework</li>
            <p>Introducing a phased approach or creating mock scenarios can help track progress. A structured framework also makes it easier for stakeholders to understand and visualize the project&#39;s stages.</p>
        </ol>
        </li>
        <li><strong>STAKEHOLDER REQUIREMENTS: ADDRESSING EXPECTATIONS</strong>
        <p>Understanding and addressing stakeholder expectations is crucial to a project&#39;s success.</p>
        <ol>
            <li>Identifying Key Stakeholder Groups</li>
            <p>Different stakeholders have unique priorities. Executives might require high-level overviews, analysts need detailed data, and clients may focus on specific outcomes. Identifying these groups ensures everyone&#39;s needs are considered.</p>
            <li>Prioritizing Features and Functions<br/>
                <p>Not all requests carry the same weight.Categorizing them as <strong>Required, Desired, or Nice-to-have </strong> helps ensure resources are directed where they&#39;re most needed.</p>
                <div>
                <ol><strong>Definitions of Each Category</strong><br/>
                <li start="1"><strong>Required:</strong>
                    <ul>
                        <li><strong>Definition:</strong>Features or functionalities that are essential for the project&#39;s success.</li> 
                        <li><strong>Impact of Absence:</strong>The project cannot meet its objectives or deliver value without these features.</li> 
                        <li><strong>Examples:</strong>
                            <ul>
                                <li style="list-style-type: circle;">Core system functionalities, like real-time data updates in a dashboard.</li> 
                                <li style="list-style-type: circle;">Legal or compliance-related requirements.</li> 
                                <li style="list-style-type: circle;">Basic infrastructure is needed for the project to function.</li>                   
                            </ul>
                        </li>                   
                    </ul>
                </li>
                <li><strong>Desired:</strong>
                    <ul>
                        <li><strong>Definition:</strong>Features that add significant value but are not critical to the project&#39;s success.</li> 
                        <li><strong>Impact of Absence:</strong>The project can still meet its objectives, but the user experience or efficiency might be diminished.</li> 
                        <li><strong>Examples:</strong>
                            <ul>
                                <li style="list-style-type: circle;">Enhancements to usability, such as advanced filtering options.</li> 
                                <li style="list-style-type: circle;">Cross-platform compatibility when the primary platform meets user needs.</li> 
                                <li style="list-style-type: circle;">Automation features that save time but have manual alternatives.</li>                   
                            </ul>
                        </li>                   
                    </ul>
                </li>
                <li><strong>Nice-to-Have:</strong>
                    <ul>
                        <li><strong>Definition:</strong>Features that are optional and provide additional convenience or appeal but do not impact the project&#39;s core goals.</li> 
                        <li><strong>Impact of Absence:</strong>No effect on the project&#39;s ability to succeed; these can be deferred or excluded without significant consequences.</li> 
                        <li><strong>Examples:</strong>
                            <ul>
                                <li style="list-style-type: circle;">Cosmetic changes, such as custom themes or advanced visual effects.</li> 
                                <li style="list-style-type: circle;">Additional reporting formats that are rarely used.</li> 
                                <li style="list-style-type: circle;">Minor integrations with non-essential tools or systems.</li>                   
                            </ul>
                        </li>                   
                    </ul>
                </li>
                <ol/>
            </li>
            </div><br>
            <li>Linking Deliverables to Objectives<br/>
            <p>Stakeholder requests should connect directly to the project&#39;s goals. 
            For example, quarterly reports are not just produced for documentation, they support strategic decision-making. 
            This alignment keeps the project relevant and focused.</p>
            </li>
        </ol>
        </li>
      </ol>

      <h5>Conclusion: The Value of Preparation</h5>
      <p>Successful projects rely on deliberate preparation. 
      Strategy documents and project requirement documents act as guiding tools, helping teams navigate complex processes. 
      By defining roles, prioritizing stakeholder needs, and establishing clear steps, these documents transform ideas into meaningful outcomes.</p>

      <p>Remember, well-crafted documentation is not just a formality, it&#39;s a key factor in achieving project success. 
      With careful planning and a structured approach, even challenging projects can yield significant results.</p>

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
            <h3>Traffic Volume department of Minesota US</h3>
            <div class='tableauPlaceholder' id='viz1737920609415'>
            <noscript>
            <a href='#'>
            <img alt='Traffic Volume analysis in US ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Tr&#47;TrafficVolumedepartmentofMinesotaUS&#47;TrafficVolumeanalysisinUS&#47;1_rss.png' style='border: none; ' />
            </a>
            </noscript>
            <object class='tableauViz'   >
            <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> 
            <param name='site_root' value='' />
            <param name='name' value='TrafficVolumedepartmentofMinesotaUS&#47;TrafficVolumeanalysisinUS' />
            <param name='tabs' value='no' /><param name='toolbar' value='yes' />
            <param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Tr&#47;TrafficVolumedepartmentofMinesotaUS&#47;TrafficVolumeanalysisinUS&#47;1.png' /> 
            <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' />
            <param name='display_count' value='yes' /><param name='language' value='en-US' />
            </object>
            </div> 
            
        `,
        tableau2: `
            <h2>Title for tableau 2</h2>
            <p>Tableau description</p>
        `,
        tableau3: `
            <h2>Title for tableau 3</h2>
            <p>ableau description</p>
        `,
    };
  
    // Event listener for thumbnails
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            const blogKey = thumbnail.getAttribute('data-blog');
            blogContent.innerHTML = tableau[blogKey];
            imageView.style.display = 'none';
            blogView.style.display = 'block';

            if (blogKey === 'tableau1') {
                const scriptElement = document.createElement('script');
                scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
                document.body.appendChild(scriptElement);
            }
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

//// download button 
document.getElementById('download-btn').addEventListener('click', () => {
    const a = document.createElement('a'); // Create a hidden anchor element
    a.href = 'assets/files/curriculum vitae.pdf';                    // Set the file URL
    a.download = 'William Ngoy-curriculum vitae.pdf';             // Set the filename for download
    a.click();                            // Programmatically click the anchor
  });

  ////////tableau
  var divElement = document.getElementById('viz1737920609415');                    
            var vizElement = divElement.getElementsByTagName('object')[0];                    
            if ( divElement.offsetWidth > 800 ) { vizElement.style.width='1000px';vizElement.style.height='827px';} 
            else if ( divElement.offsetWidth > 500 ) { vizElement.style.width='1000px';vizElement.style.height='827px';} 
            else { vizElement.style.width='100%';vizElement.style.height='1527px';}                     
            var scriptElement = document.createElement('script');                    
            scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    
            vizElement.parentNode.insertBefore(scriptElement, vizElement);  

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
