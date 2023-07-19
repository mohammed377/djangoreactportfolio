import React from "react";
import full_stack_certificate from "./images/certifications/1mac_certificate.pdf"
import computer_networks from "./images/certifications/Computer_networks.pdf"
import data_analysis from "./images/certifications/data_analysis.pdf"
import ml from "./images/certifications/ml.png"
import fullStackPreviewImage from "./images/ce_previews/full_stack_preview.jpg"
import dataAnalysisPreview from "./images/ce_previews/data_analysis_preview.jpg"
import cNetworksPreview from "./images/ce_previews/Computer_networks_preview.jpg"

const Achievements = () => {
  return (
    <div className="achievements">
       {/* Full Stack certificate */}
       <div className="cert">
       <h4>Full Stack Development Certificate</h4>

         <a href={full_stack_certificate}>
           <img src={fullStackPreviewImage} alt="Full Stack preview" />  
         </a>
         <p>
           <a href={full_stack_certificate} download>
             Download PDF
           </a>
         </p>
       </div> 
       {/* Computer Networks certificate */} 
       <div className="cert">
       <h4>Computer Networks Certificate</h4>

        <a href={computer_networks}>
            <img src={cNetworksPreview} alt="Computer Networks Preview" />  
          </a>
          <p>
            <a href={computer_networks} download>
              Download PDF
            </a>
          </p>
       </div>
       {/* Data Analysis certificate */}
       <div className="cert">
       <h4>Data Analysis Certificate</h4>

        <a href={data_analysis}>
            <img src={dataAnalysisPreview} alt="Full Stack preview" />  
          </a>
          <p>
            <a href={data_analysis} download>
              Download PDF
            </a>
          </p>
       </div>    
       {/* Machine Learning badge  */} 
       <div className="cert">
       <h4>Machine Learning Badge</h4>          

       <a href={ml}>
           <img src={fullStackPreviewImage} alt="Full Stack preview" />  
         </a>
         <p>
           <a href={ml} download>
             Download PDF
           </a>
         </p>
       </div>            
    </div>  
  );     
};

export default Achievements;