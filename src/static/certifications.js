import SAFCertificate from "../assets/certificateImages/SAFeCertificate.png";
import KubernetesCertificate from "../assets/certificateImages/KubernetesCertificate.png";
import DevopsCertificate from "../assets/certificateImages/DevopsCertificate.png";
import AZ900Microsoft from "../assets/certificateImages/AZ900Microsoft.png";
import AWSCLoudPractitioner from '../assets/certificateImages/AWSCloudPractitioner.png';
import ReactCertificate from '../assets/certificateImages/ReactCertificate.png';
import VueCertificate from '../assets/certificateImages/VueCertificate.png';

export const certificationData = [
  {
    key: 1,
    certificateName: "Vue Certification",
    certificateVendor: "Udemy",
    certificate: VueCertificate,
    certificateAlt: "Vue Certificate",
    Expiry: "Never",
  },
  {
    key: 2,
    certificateName: "AZ-900: Azure fundamentals for Beginners",
    certificateVendor: "Azure",
    certificate: AZ900Microsoft,
    certificateAlt: "AZ-900 Certificate",
    Expiry: "Never",
  },
  {
    key: 3,
    certificateName: "React certification",
    certificateVendor: "Simplilearn",
    certificate: ReactCertificate,
    certificateAlt: 'React Certificate',
    Expiry: 'Never'
  },
  {
    key: 4,
    certificateName: "Kubernetes for the absolute beginners",
    certificateVendor: "Udemy",
    certificate: KubernetesCertificate,
    certificateAlt: "Kubernetes Certificate",
    Expiry: "Never",
  },
  {
    key: 5,
    certificateName: "AWS Cloud Practitioner Essentials",
    certificateVendor: "Coursera",
    certificate: AWSCLoudPractitioner,
    certificateAlt: "AWS Cloud Practitioner Certificate",
    Expiry: "Never",
  },
  {
    key: 6,
    certificateName: "Azure DevOps Fundamentals for Beginners",
    certificateVendor: "Udemy",
    certificate: DevopsCertificate,
    certificateAlt: "Devops Certificate",
    Expiry: "Never",
  },
  {
    key: 7,
    certificateName: "SAFe 5 Practitioner",
    certificateVendor: "Scaled Agile",
    certificate: SAFCertificate,
    certificateAlt: 'SAFe Certificate',
    Expiry: '3rd December, 2023'
  },
];
