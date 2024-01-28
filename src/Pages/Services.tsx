// In HomePage.tsx
import React from 'react';
import DataCard from '../components/DataCard';
import PageLayout from '../components/PageLayout';
import PricingCard from '../components/PricingCard';
import PricingSection from '../components/PricingSection';

const Services: React.FC = () => {
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
            <p>As an independent Information Systems Technology Servicing company, we specialise in helping highly regulated industries integrate their systems and processes seamlessly. With a particular focus on the Healthcare, Agriculture, Finance, and Public Services industries, we have become trusted advisors to our clients globally with a strong focus on the UK, Spain and Nigeria.
            We are involved in many R&D projects and our services are specifically designed to meet the needs of highly regulated industries, where safety and compliance are critical.</p>
            </center>
            <center>
              </center>
        </PageLayout>
        </div>
        <br>
        </br>
  <DataCard 
          title="Application Development" 
          text="We are experts in transforming your business processes in to automation solutions that create efficiencies, annd cost savings to your operations." 
          imageUrl="/images\AppDev.png"
          backgroundColor="#f0f0f0" // Example background color
          structuredText={[
            { header: "Front-End Development with React.js:", paragraph: "Interactive UI/UX Design: Utilize React's component-based architecture to build dynamic and responsive user interfaces. Ensure a seamless and engaging user experience across various devices and platforms. Single-Page Applications (SPAs): Create fast and fluid SPAs that offer a native-app-like experience, reducing page reloads and improving user engagement. State Management Solutions: Implement state management tools like Redux or Context API to efficiently handle data across different components. Integration with APIs and Web Services: Connect the React front end with various RESTful APIs, web services, and third-party services for expanded functionality. Performance Optimization: Leverage React's virtual DOM for high-performance applications, optimizing rendering and updating processes for faster and smoother user experiences. Accessibility and Internationalization: Develop applications that are accessible and internationalized, reaching a broader audience and ensuring compliance with global standards." },
            { header: "Back-End Development with Express.js", paragraph: "RESTful API Development: Design and develop scalable and secure RESTful APIs using Express.js, facilitating effective communication between the front end and database. Database Integration: Integrate with various databases (like MongoDB, SQL databases) for robust data storage and retrieval. Authentication and Authorization: Implement secure user authentication and authorization mechanisms, including OAuth, JWT, and session-based authentication. Server-Side Rendering: Leverage server-side rendering capabilities for improved SEO and faster initial page loads. Middleware Management: Utilize Express.js middleware for request handling, enhancing app functionality and performance. Error Handling and Logging: Implement comprehensive error handling and logging mechanisms for smoother application maintenance and debugging." },
            { header: "Latest Web Technologies and Practices:", paragraph: "Responsive Design: Use modern CSS frameworks and techniques to ensure that applications are responsive and mobile-friendly. Progressive Web Apps (PWAs): Develop PWAs for a native-like experience, enabling offline usage, push notifications, and faster load times. Web Security Best Practices: Implement the latest web security standards, including HTTPS, data encryption, and protection against common vulnerabilities like XSS and CSRF attacks. Version Control and DevOps Integration: Utilize Git for version control and integrate with DevOps pipelines for continuous integration and deployment (CI/CD). Cloud Integration and Deployment: Provide support for deploying applications to cloud platforms (like AWS, Azure, or Google Cloud) for scalability and reliability. Modern JavaScript Features and Frameworks: Use the latest ES6+ features and incorporate other JavaScript frameworks/libraries as needed. Real-Time Data Handling: Implement WebSocket or similar technologies for real-time data handling in applications requiring live updates. SEO-Friendly Development: Ensure that applications are built with SEO best practices in mind for higher search engine visibility." },
            { header: "Custom Code Injection - Extending Platform capabilities:", paragraph: "At Costcone global, we go the extra mile to ensure that your requirements are satisfied - where applicable we make use of custom code injections to enhance or modify the functionality of platforms such as Nintex, and Power Platform, particularly around API integration with other systems, Web Service Calls, or use cases that utilize large datasets."},
            { header: "Support and Maintenance:", paragraph: "Ongoing Technical Support: Provide ongoing support for the applications, including troubleshooting and resolving any issues. Performance Monitoring and Optimization: Continuously monitor application performance and make necessary optimizations for enhanced efficiency. Regular Updates and Upgrades: Keep the application updated with the latest technology trends and security patches. User Feedback Incorporation: Regularly incorporate user feedback to improve the application and add new features based on user needs.s" }
            
            // ... more sections as needed
          ]}
        />  
        <DataCard
          title="Digital Business Process Solutions" 
          text=" consultation services offered to help businesses integrate Nintex Automation Cloud. " 
          imageUrl="/images/bpr1.png" 
          backgroundColor="#f0f0f0" // Example background color
          structuredText={[
            { header: "Automated Workflow Solutions:", paragraph: "At Costcone Global, we work with industries best-practices and advanced business process automation and management tools. Designing and implementing automated workflows for routine business processes, from simple to very complex processes, facilitating the reduction of manual efforts and enhancing efficiency and transparency within businesses. We leverage the capabilities of workflow development tools such as Nintex Automation Cloud, Power Automate, Automation Anywhere, UIPath and Camunda. When considering building applications for our clients, we review your entire business operations in relation to our deliverables and deliver to specification based on suitability and usability for your business." },
            { header: "Form and Mobile App Development:", paragraph: "RESTful API Development: Design and develop scalable and secure RESTful APIs using Express.js, facilitating effective communication between the front end and database. Database Integration: Integrate with various databases (like MongoDB, SQL databases) for robust data storage and retrieval. Authentication and Authorization: Implement secure user authentication and authorization mechanisms, including OAuth, JWT, and session-based authentication. Server-Side Rendering: Leverage server-side rendering capabilities for improved SEO and faster initial page loads. Middleware Management: Utilize Express.js middleware for request handling, enhancing app functionality and performance. Error Handling and Logging: Implement comprehensive error handling and logging mechanisms for smoother application maintenance and debugging." },
            { header: "Process Mapping and Management: ", paragraph: "Responsive Design: Use modern CSS frameworks and techniques to ensure that applications are responsive and mobile-friendly. Progressive Web Apps (PWAs): Develop PWAs for a native-like experience, enabling offline usage, push notifications, and faster load times. Web Security Best Practices: Implement the latest web security standards, including HTTPS, data encryption, and protection against common vulnerabilities like XSS and CSRF attacks. Version Control and DevOps Integration: Utilize Git for version control and integrate with DevOps pipelines for continuous integration and deployment (CI/CD). Cloud Integration and Deployment: Provide support for deploying applications to cloud platforms (like AWS, Azure, or Google Cloud) for scalability and reliability. Modern JavaScript Features and Frameworks: Use the latest ES6+ features and incorporate other JavaScript frameworks/libraries as needed. Real-Time Data Handling: Implement WebSocket or similar technologies for real-time data handling in applications requiring live updates. SEO-Friendly Development: Ensure that applications are built with SEO best practices in mind for higher search engine visibility." },
            { header: "Integration with Microsoft Ecosystem:", paragraph: "At Costcone global, we go the extra mile to ensure that your requirements are satisfied - where applicable we make use of custom code injections to enhance or modify the functionality of platforms such as Nintex, and Power Platform, particularly around API integration with other systems, Web Service Calls, or use cases that utilize large datasets."},
            { header: "Cloud-based Automation:", paragraph: "Ongoing Technical Support: Provide ongoing support for the applications, including troubleshooting and resolving any issues. Performance Monitoring and Optimization: Continuously monitor application performance and make necessary optimizations for enhanced efficiency. Regular Updates and Upgrades: Keep the application updated with the latest technology trends and security patches. User Feedback Incorporation: Regularly incorporate user feedback to improve the application and add new features based on user needs.s" },
            { header: "AI and Cognitive Services Integration", paragraph: "Ongoing Technical Support"},
            { header: "Cognitive Automation", paragraph: "Ongoing Technical Support"},
            { header: "Integrated Solutions", paragraph: "Ongoing Technical Support"},
            
            // ... more sections as needed
          ]}
          
        />
        <DataCard
          title="Artificial Intelligence, Internet of Things(IoT), Data Visualisation and Reporting" 
          text=" consultation services offered to help businesses integrate Nintex Automation Cloud." 
          imageUrl="/images/contracts.png" 
          backgroundColor="#f0f0f0" // Example background color
          structuredText={[
            { header: "Automated Workflow Solutions:", paragraph: "At Costcone Global, we work with industries best-practices and advanced business process automation and management tools. Designing and implementing automated workflows for routine business processes, from simple to very complex processes, facilitating the reduction of manual efforts and enhancing efficiency and transparency within businesses. We leverage the capabilities of workflow development tools such as Nintex Automation Cloud, Power Automate, Automation Anywhere, UIPath and Camunda. When considering building applications for our clients, we review your entire business operations in relation to our deliverables and deliver to specification based on suitability and usability for your business." },
            { header: "Form and Mobile App Development:", paragraph: "RESTful API Development: Design and develop scalable and secure RESTful APIs using Express.js, facilitating effective communication between the front end and database. Database Integration: Integrate with various databases (like MongoDB, SQL databases) for robust data storage and retrieval. Authentication and Authorization: Implement secure user authentication and authorization mechanisms, including OAuth, JWT, and session-based authentication. Server-Side Rendering: Leverage server-side rendering capabilities for improved SEO and faster initial page loads. Middleware Management: Utilize Express.js middleware for request handling, enhancing app functionality and performance. Error Handling and Logging: Implement comprehensive error handling and logging mechanisms for smoother application maintenance and debugging." },
            { header: "Process Mapping and Management: ", paragraph: "Responsive Design: Use modern CSS frameworks and techniques to ensure that applications are responsive and mobile-friendly. Progressive Web Apps (PWAs): Develop PWAs for a native-like experience, enabling offline usage, push notifications, and faster load times. Web Security Best Practices: Implement the latest web security standards, including HTTPS, data encryption, and protection against common vulnerabilities like XSS and CSRF attacks. Version Control and DevOps Integration: Utilize Git for version control and integrate with DevOps pipelines for continuous integration and deployment (CI/CD). Cloud Integration and Deployment: Provide support for deploying applications to cloud platforms (like AWS, Azure, or Google Cloud) for scalability and reliability. Modern JavaScript Features and Frameworks: Use the latest ES6+ features and incorporate other JavaScript frameworks/libraries as needed. Real-Time Data Handling: Implement WebSocket or similar technologies for real-time data handling in applications requiring live updates. SEO-Friendly Development: Ensure that applications are built with SEO best practices in mind for higher search engine visibility." },
            { header: "Integration with Microsoft Ecosystem:", paragraph: "At Costcone global, we go the extra mile to ensure that your requirements are satisfied - where applicable we make use of custom code injections to enhance or modify the functionality of platforms such as Nintex, and Power Platform, particularly around API integration with other systems, Web Service Calls, or use cases that utilize large datasets."},
            { header: "Cloud-based Automation:", paragraph: "Ongoing Technical Support: Provide ongoing support for the applications, including troubleshooting and resolving any issues. Performance Monitoring and Optimization: Continuously monitor application performance and make necessary optimizations for enhanced efficiency. Regular Updates and Upgrades: Keep the application updated with the latest technology trends and security patches. User Feedback Incorporation: Regularly incorporate user feedback to improve the application and add new features based on user needs.s" },
            { header: "AI and Cognitive Services Integration", paragraph: "Ongoing Technical Support"},
            { header: "Cognitive Automation", paragraph: "Ongoing Technical Support"},
            { header: "Integrated Solutions", paragraph: "Ongoing Technical Support"},
            
            // ... more sections as needed
          ]}
        />
        <DataCard
          title="Contracts, Delivery Management Services" 
          text=" consultation services offered to help businesses integrate Nintex Automation Cloud. " 
          imageUrl="/images/Delivery.png" 
          backgroundColor="#f0f0f0" // Example background color
          structuredText={[
            { header: "Automated Workflow Solutions:", paragraph: "At Costcone Global, we work with industries best-practices and advanced business process automation and management tools. Designing and implementing automated workflows for routine business processes, from simple to very complex processes, facilitating the reduction of manual efforts and enhancing efficiency and transparency within businesses. We leverage the capabilities of workflow development tools such as Nintex Automation Cloud, Power Automate, Automation Anywhere, UIPath and Camunda. When considering building applications for our clients, we review your entire business operations in relation to our deliverables and deliver to specification based on suitability and usability for your business." },
            { header: "Form and Mobile App Development:", paragraph: "RESTful API Development: Design and develop scalable and secure RESTful APIs using Express.js, facilitating effective communication between the front end and database. Database Integration: Integrate with various databases (like MongoDB, SQL databases) for robust data storage and retrieval. Authentication and Authorization: Implement secure user authentication and authorization mechanisms, including OAuth, JWT, and session-based authentication. Server-Side Rendering: Leverage server-side rendering capabilities for improved SEO and faster initial page loads. Middleware Management: Utilize Express.js middleware for request handling, enhancing app functionality and performance. Error Handling and Logging: Implement comprehensive error handling and logging mechanisms for smoother application maintenance and debugging." },
            { header: "Process Mapping and Management: ", paragraph: "Responsive Design: Use modern CSS frameworks and techniques to ensure that applications are responsive and mobile-friendly. Progressive Web Apps (PWAs): Develop PWAs for a native-like experience, enabling offline usage, push notifications, and faster load times. Web Security Best Practices: Implement the latest web security standards, including HTTPS, data encryption, and protection against common vulnerabilities like XSS and CSRF attacks. Version Control and DevOps Integration: Utilize Git for version control and integrate with DevOps pipelines for continuous integration and deployment (CI/CD). Cloud Integration and Deployment: Provide support for deploying applications to cloud platforms (like AWS, Azure, or Google Cloud) for scalability and reliability. Modern JavaScript Features and Frameworks: Use the latest ES6+ features and incorporate other JavaScript frameworks/libraries as needed. Real-Time Data Handling: Implement WebSocket or similar technologies for real-time data handling in applications requiring live updates. SEO-Friendly Development: Ensure that applications are built with SEO best practices in mind for higher search engine visibility." },
            { header: "Integration with Microsoft Ecosystem:", paragraph: "At Costcone global, we go the extra mile to ensure that your requirements are satisfied - where applicable we make use of custom code injections to enhance or modify the functionality of platforms such as Nintex, and Power Platform, particularly around API integration with other systems, Web Service Calls, or use cases that utilize large datasets."},
            { header: "Cloud-based Automation:", paragraph: "Ongoing Technical Support: Provide ongoing support for the applications, including troubleshooting and resolving any issues. Performance Monitoring and Optimization: Continuously monitor application performance and make necessary optimizations for enhanced efficiency. Regular Updates and Upgrades: Keep the application updated with the latest technology trends and security patches. User Feedback Incorporation: Regularly incorporate user feedback to improve the application and add new features based on user needs.s" },
            { header: "AI and Cognitive Services Integration", paragraph: "Ongoing Technical Support"},
            { header: "Cognitive Automation", paragraph: "Ongoing Technical Support"},
            { header: "Integrated Solutions", paragraph: "Ongoing Technical Support"},
            
            // ... more sections as needed
          ]}  
        />
   <PageLayout title="Supporting you through your digital transformation.... Our team of Automation Consultants, Solution Architects, and Delivery Managers are specialised in a wide range of technologies and subject matter." detail="" date="">
            <center>
            <p>As an independent Information Systems Technology Servicing company, we specialise in helping our clients in highly regulated industries integrate their systems and processes seamlessly.

               With a particular focus on Banking and Finance, Legal, Power & Energy and Public sectors, we have become trusted advisors to our clients globally with a strong focus on the UK, Spain and Nigeria.

              At ITS, we pride ourselves on providing automation solutions for complex problems that help companies streamline their operations, enhance productivity, and reduce costs.

              We are involved in many R&D projects and our services are specifically designed to meet the needs of highly regulated industries, where safety and compliance are critical.</p>
            </center>
            <br>
        </br>
        <br>
        </br>
        </PageLayout>
    
        <PricingSection />

</div>
);
};

export default Services;
