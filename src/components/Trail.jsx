import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Textarea } from "@/components/ui/textarea";
import { getNames } from "country-list";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function Trail({ courseName }) {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [countries, setCountries] = useState([]);
  const [gender, setGender] = useState("");

  // Load country names when the input field is clicked
  const handleInputClick = () => {
    if (countries.length === 0) {
      setCountries(getNames());
    }
  };
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    message: "",
    courseName: courseName,
    email:"",
    country:"",
    gender:""
  });
  const [statusMessage, setStatusMessage] = useState("");
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  if (courseName) {
    formData.courseName = courseName;
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS parameters
    const serviceID = "service_erjifan";
    const templateID = "template_6vg1h7x";
    const userID = "5R1VUvJC-DpYRGAJQ";
    setLoading(true)
    emailjs
      .send(serviceID, templateID, formData, userID)
      .then(() => {
        setStatusMessage("Message sent successfully!");
        setFormData({ name: "", contactNumber: "", message: "" ,selectedCountry:"",gender:"" });
    setLoading(false)
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        setStatusMessage("Failed to send message. Please try again.");
    setLoading(false)
      });
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="bg-[#C28336] group-hover:text-white transition-colors  group-hover:bg-[#014B5E]  active:scale-95 duration-150 active:transition-transform"
        >
          Book Free Trial
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-[#EEEEEE]">
        <DialogHeader>
          <DialogTitle>Book Free Tail</DialogTitle>
         
        </DialogHeader>
        <div className="grid gap-4 ">
          <div className="">
            <form onSubmit={handleSubmit} className="space-y-2">
              <div>
                <label className="block text-sm font-medium !mb-2">
                  {" "}
                  Course Name
                </label>
                <span className="mt-1 p-2  rounded border border-black bg-transparent !w-full ">
                  {formData.courseName}
                </span>
                <label className="block text-sm font-medium !mt-4">
                  Your Name
                </label>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2  rounded w-full border border-black"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Contact Number
                </label>
                <Input
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  required
                  placeholder="(+123) 456-7890"
                  className="mt-1 p-2 border border-black rounded w-full "
                />
              </div>

              {/* country name */}
          <div className="">
      <label htmlFor="country" className="block text-sm font-medium">Select a country:</label>
      <input
        id="country"
        list="countries"
        placeholder="Choose a country"
        onClick={handleInputClick}
        onChange={handleChange}
        value={formData.country}
        name="country"
        required
        className="mt-1 p-2  rounded w-full border border-black !bg-[#EEEEEE] placeholder:text-black"

      />
      <datalist id="countries">
        {countries.map((country, index) => (
          <option key={index} value={country} />
        ))}
      </datalist>
      {formData.country && (
        <p>
          Selected Country: <strong>{formData.country}</strong>
        </p>
      )}
    </div>
          {/* end country name */}
          {/* gender */}
          {/* Gender Selection */}
      <div style={{ marginTop: "1rem" }}>
        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            onChange={handleChange}
            checked={formData.gender === "Male"}
            required
          />
          Male
        </label>
        <label style={{ marginLeft: "1rem" }}>
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={handleChange}
            checked={formData.gender === "Female"}
            required
          />
          Female
        </label>
      </div>

      
          {/* end gender */}
              <div>
                <label className="block text-sm font-medium">
                  Email
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email Address"
                  className="mt-1 p-2 border border-black rounded w-full "
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2  rounded w-full bg-transparent border border-black h-32"
                  placeholder="write your detail message here for the trial class."
                />
              </div>
              <button
                type="submit"
                className="bg-[#014B5E] text-white p-2 rounded mt-2 hover:bg-blue-600 w-full"
              >
               {loading?"Loading...":"Submit"}
              </button>
            </form>
            {statusMessage && (
              <p className={`mt-4 text-sm text-center ${statusMessage.includes("Failed")?"text-red-500":"text-green-500"}`}>{statusMessage}</p>
             
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
