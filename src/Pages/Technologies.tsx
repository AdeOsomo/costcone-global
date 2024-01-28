import React from 'react';
import DataCard from '../components/DataCard';
import PageLayout from '../components/PageLayout';
import PowerPlatform from '../images/PowerPlatform.png';

const Technologies = () => {
  const sections = [
    { title: "Nintex for Workflow Automation", text: "Utilizing Nintex, we provide top-tier workflow automation solutions..." },
    { title: "Microsoft Power Platform for Versatile Solutions", text: "Our expertise in the Microsoft Power Platform enables us to deliver versatile and integrated business solutions..." },
    // ... more sections
  ];
    return (
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      <div>
       <br>
       </br>
       <br>
       </br>
       <br>
       </br>
       <br>
       </br>
       <PageLayout title="Building an Ecosystem of User-Centric Applications. Supporting you through your process automation problems, Tailor made and Integrated solutions to do exactly what you want." detail="" date="">
        
        <center>
        </center>
        </PageLayout>
       </div>       
       <DataCard title="Power Platform - PowerApps, Automate, Power BI" 
        text="Leveraging the Microsoft Power Platform, we provide versatile solutions that integrate seamlessly with existing business systems. This platform allows us to create applications that enhance data analysis, automate processes, and foster collaboration. Power BI, Power Apps, and Power Automate are instrumental in turning complex business data into actionable insights, empowering decision-makers with real-time information."
        imageUrl={PowerPlatform}
        structuredText={[
          { header: "PowerApps:", paragraph: "We specialize in building custom business applications leveraging the capabilities of PowerApps to develop low-code business applications of all types. Deploying solutions that are accessible accross multiple mobile devices and web browsers." },
          { header: "Power BI:", paragraph: "By leveraging the capabilities of Power BI, we are able to facilitate data integration across multiple data sources both internal  business data and external third party data sources to create Advanced Analytics and data reporting, deploying interactive business intelligence solutions to facilitate strategic decision making within your business.." },
          { header: "Workflow Automation with Power Automate:", paragraph: "We provide tailored solutions to optimize HR, finance, legal, and compliance processes. Our approach not only ensures regulatory compliance but also streamlines these critical functions, resulting in significant time and cost savings." },
          // ... more sections as needed
        ]}
      />
      <DataCard 
        title="Nintex Automation Cloud" 
        text="Our use of Nintex positions us uniquely to offer robust workflow automation solutions. Nintex’s intuitive tools enable the design and deployment of automated processes that significantly reduce manual intervention. This not only accelerates task completion but also minimizes human error, leading to more efficient and reliable business operations." 
        imageUrl="/images\NintexCloud.png" 
        structuredText={[
          { header: "Streamlined Data Integration:", paragraph: " We specialize in integrating disparate data sources, providing a unified and accessible data environment. This integration ensures that decision-makers have real-time access to critical business insights, enabling informed decision-making. By leveraging these offerings, businesses can optimize their operations, improve decision-making, and enhance customer and employee experiences through tailored and integrated solutions" },
          { header: "Empowering People and Processes:", paragraph: "Our solutions empower employees by automating routine tasks, freeing them to focus on more strategic initiatives. By reducing manual efforts, we enhance productivity and job satisfaction, leading to a more efficient and motivated workforce." },
          { header: "Optimizing Internal Business Processes:", paragraph: "We provide tailored solutions to optimize HR, finance, legal, and compliance processes. Our approach not only ensures regulatory compliance but also streamlines these critical functions, resulting in significant time and cost savings." },
          // ... more sections as needed
        ]}
      />
      <DataCard 
        title="Automation Anywhere" 
        text="By integrating Automation Anywhere, we bring the power of Robotic Process Automation (RPA) to businesses. This technology enables the automation of repetitive, rule-based tasks, freeing up valuable human resources for more strategic work. RPA with Automation Anywhere not only increases efficiency but also reduces the likelihood of human error, leading to more consistent and reliable outcomes for your business" 
        imageUrl="/images\AutomationAnywhere.png" 
        structuredText={[
          { header: "Streamlined Data Integration:", paragraph: " We specialize in integrating disparate data sources, providing a unified and accessible data environment. This integration ensures that decision-makers have real-time access to critical business insights, enabling informed decision-making." },
          { header: "Empowering People and Processes:", paragraph: "Our solutions empower employees by automating routine tasks, freeing them to focus on more strategic initiatives. By reducing manual efforts, we enhance productivity and job satisfaction, leading to a more efficient and motivated workforce." },
          { header: "Optimizing Internal Business Processes:", paragraph: "We provide tailored solutions to optimize HR, finance, legal, and compliance processes. Our approach not only ensures regulatory compliance but also streamlines these critical functions, resulting in significant time and cost savings." },
          // ... more sections as needed
        ]}
      />
      <DataCard 
        title="Camunda"   
        text="Camunda has become a crucial part of our toolkset, especially for managing complex workflows and decision automation. It excels in orchestrating sophisticated business processes, providing a high level of control and visibility. This is particularly beneficial for businesses requiring detailed process management that spans across various departments and systems.." 
        imageUrl="/images\Camunda.png" 
        structuredText={[
          { header: "Streamlined Data Integration:", paragraph: " We specialize in integrating disparate data sources, providing a unified and accessible data environment. This integration ensures that decision-makers have real-time access to critical business insights, enabling informed decision-making." },
          { header: "Empowering People and Processes:", paragraph: "Our solutions empower employees by automating routine tasks, freeing them to focus on more strategic initiatives. By reducing manual efforts, we enhance productivity and job satisfaction, leading to a more efficient and motivated workforce." },
          { header: "Optimizing Internal Business Processes:", paragraph: "We provide tailored solutions to optimize HR, finance, legal, and compliance processes. Our approach not only ensures regulatory compliance but also streamlines these critical functions, resulting in significant time and cost savings." },
          // ... more sections as needed
        ]}
      />
      <div>
    </div>
   </div>
    );
};

export default Technologies;
