import React from 'react';
import '../CSS/Home.css';
import PageLayout from '../components/PageLayout';
import DataCard from '../components/DataCard';
import CanvasComponent from '../components/CanvasComponent';
import backgroundImage from '../images/Frame1.png';
import backgroundImage2 from '../images/Frame2.png';
import companypageLogo from '../images/Frame13.png';
import sideImage from '../images/contracts.png';
import CompanyComponent from '../components/CompanyComponent';
import Grid from '@mui/material/Grid';
import PageText from '../components/PageText';




const Home: React.FC = () => {
  
  const textList = ["Your Long term strategic partner - from business improvement to enterprise integration.", "Creating Efficiencies, transparency and cost-savings for your business.", "Facilitating Collaborations and enabling your people to work smarter"]; // Replace with actual texts
  const bulletPoints = [
    "Business Process Automation(BPA), Robotics Process Automation (RPA), Artificial Intelligence and Machine Learning (AI/ML) driven enterprise solutions.",
    "Computer Vision, Supervisory Control and Data Acquistion (SCADA), Manufacturing Process Soltions",
    "AI-Powered Automation Solutions, AI Model Training and Fine Tuning",
    "Advanced Analytics and Business Intelligence"
  ];
  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
    <br>
    </br>
    <br>
    </br>
    <div>
      <CanvasComponent backgroundImage= {backgroundImage} />
      </div>
      <div>
      <CompanyComponent 
      backgroundImage= {backgroundImage2} // Replace with your actual image path
      headerText="Our Company" 
      bodyText="Our mandate is to be your long term strategic technology partner, providing Advisory Services and building a thriving ecosystem of bespoke applications to support your business operations. We are at the forefront of leveraging advanced technologies to keep our customers both competitive and delighted.
      In today's rapidly evolving business landscape, Nigerian enterprises are increasingly recognizing the necessity for streamlined processes, enhanced transparency, and cost optimization."
      bodyText1="At Costcone Global, we specialize in delivering end-to-end business process solutions and custom application development to extend the capabilities on multiple Enterprise Platforms, addressing these critical business needs with a blend of cutting-edge technologies and custom solutions. We leverage platforms like Nintex Automation Cloud, Microsoft Power Platform, SharePoint Online, Dynamics365. We also engage in application bespoke development with React to deliver tailor-made solutions that drive efficiency and operational excellence."
      bulletPoints={bulletPoints}
      sideImage= {sideImage}
    />
      </div>
      <div></div>
      <Grid container justifyContent="center" alignItems="center" style={{ width: '100%', backgroundColor: '#e0e0e0' }}>
    <DataCard 
          title="Bespoke Applications Development" 
          text="We pride ourselves in delivering solutions that do exactly what you want, exactly how you imagined it. Where your requirements demand the need for a custom solution, we are prepared to take the challenge and deliver."
          imageUrl="/images\AppDev.png"
          backgroundColor="#f0f0f0" // Example background color
        />
        <DataCard
          title="Business Process Automation" 
          text="We are experts in transforming your business processes in to automation solutions that create efficiencies, transparency and cost savings for your business. Our team of world class automation consultants are here to help." 
          imageUrl="/images/bpr1.png" 
          backgroundColor="#f0f0f0" // Example background color
        />
        <DataCard
          title="Artificial Intelligence/ Machine Learning(AI/ML), Internet of Things(IoT)." 
          text="Stay on top of your Business Strategies, Campaigns, Research and Development. We deliver a comprehensive AI/ML model integration service." 
          imageUrl="/images/BusinessIntel.png" 
          backgroundColor="#f0f0f0" // Example background color
        />
        <DataCard
          title="Advisory, Contracts, Delivery Management Services" 
          text="Our team of specialist Business Analysts, Solution Architects and Delivery Managers will take the time to understand your business needs, strategy, and goals; then propose the most cost-effective, suitable and usable technologies for solution delivery; then deliver!" 
          imageUrl="/images/Delivery.png" 
          backgroundColor="#f0f0f0" // Example background color
        />
    </Grid>
      <DataCard title="Power Platform - PowerApps, Automate, Power BI" 
        text="By leveraging the capabilities of the Microsoft Power Platform, we provide versatile solutions that integrate seamlessly with existing business systems. This platform allows us to create applications that enhance data analysis, automate processes, and foster collaboration. Power BI, Power Apps, and Power Automate are instrumental in turning complex business data into actionable insights, empowering decision-makers with real-time information. PowerApps for your business offers a range of benefits, particularly in streamlining operations, enhancing productivity, and enabling greater agility in responding to business needs. " 
        imageUrl="/images\PowerPlatform.png"
      />
      <DataCard 
        title="Nintex Automation Cloud" 
        text="Our use of Nintex positions us uniquely to offer robust workflow/ business process automation solutions. Nintex’s intuitive tools enable the design and deployment of automated processes that significantly reduce manual intervention. This not only accelerates task completion but also minimizes human error, leading to more efficient and reliable business operations. Nintex Workflow is a low-code workflow development platform that facilitates rapid application development and deployment, thereby enabling businesses to respond swiftly to changing requirements and market conditions. We are certified Automation Consultants at Costcone Global with commercial awareness of the capabilities and limitations of the Nintex platform. What sets us apart from the rest - With our expertise, we are able to extend the capabilities of Nintex workflows where applicable by code injections created to ensure that all your busines application requirements are satisfied." 
        imageUrl="/images\NintexCloud.png" 
      />
      <DataCard 
        title="Automation Anywhere" 
        text="By integrating Automation Anywhere, we bring the power of Robotic Process Automation (RPA) to businesses. This technology enables the automation of repetitive, rule-based tasks, freeing up valuable human resources for more strategic work. RPA with Automation Anywhere not only increases efficiency but also reduces the likelihood of human error, leading to more consistent and reliable outcomes for your business" 
        imageUrl="/images\AutomationAnywhere.png" 
      />
      <DataCard 
        title="Camunda"   
        text="Camunda has become a crucial part of our toolset, especially for managing complex workflows and decision automation. It excels in orchestrating sophisticated business processes, providing a high level of control and visibility. This is particularly beneficial for businesses requiring detailed process management that spans across various departments and systems.." 
        //
        imageUrl="/images\Camunda.png" 
      />
    </div>
  );
};

export default Home;

