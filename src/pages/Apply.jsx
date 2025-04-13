import { useFormik } from "formik";
import * as yup from "yup";
import { useAppContext } from "../context/AppContext";



export default function ApplyForm() {

  const { countryCode } = useAppContext();

  const validationSchema = yup.object({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    address: yup.string().required("Address is required"),
    city: yup.string().required("City is required"),
    state: countryCode === "US" ? yup.string().required("State is required")
          : countryCode === "" ? yup.string().required("State/Territory is required")
          : yup.mixed(),
    zipCode: countryCode === "US" ? yup.string().required("Zip Code is required") : yup.mixed(),
    postCode: countryCode === "" ? yup.string().required("Post Code is required") : yup.mixed(),
    country: countryCode === "US" ? yup.string().required("Country is required") : yup.mixed(),

    ssn: countryCode === "US" ? yup.string().required("SSN is required") : yup.mixed(),
    nin: countryCode === "GB" ? yup.string().required("NIN is required") : yup.mixed(),
    tfn: countryCode === "" ? yup.string().required("TFN is required") : yup.mixed(),

    routingNumber: countryCode === "US" ? yup.string().required("Routing Number is required") : yup.mixed(),
    transitNumber: countryCode === "GB" ? yup.string().required("Transit Number is required") : yup.mixed(),
    institutionNumber: countryCode === "GB" ? yup.string().required("Institution Number is required") : yup.mixed(),
    bsbNumber: countryCode === "" ? yup.string().required("BSB Number is required") : yup.mixed(),

    email: yup.string().email("Invalid email").required("Email is required"),
    dob: yup.date().required("Date of Birth is required"),
    personalNumber: yup.string().required("Personal Number is required"),
    alternateNumber: yup.string(),
    employer: yup.string().required("Employer is required"),
    currentEmployer: yup.string().required("Current Employer is required"),
    occupation: yup.string().required("Occupation is required"),
    workNumber: yup.string().required("Work Number is required"),
    getPaid: yup.string().required("Payment frequency is required"),
    incomeMonthly: yup.string().required("Monthly income is required"),
    nextPayDate: yup.date().required("Next Pay Date is required"),
    bankName: yup.string().required("Bank Name is required"),
    accountNumber: yup.string().required("Account Number is required"),
    accountFrom: yup.string().required("Account duration is required"),
    creditScore: yup.string().required("Credit Score is required"),
    loanAmount: yup.string().required("Loan Amount is required"),
    previousLoan: yup.string().required("Previous Loan information is required"),
  });
  

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      postCode: "",
      country: "",
      ssn: "",
      nin: "",
      tfn: "",
      email: "",
      dob: "",
      personalNumber: "",
      alternateNumber: "",
      employer: "",
      currentEmployer: "",
      occupation: "",
      workNumber: "",
      getPaid: "",
      incomeMonthly: "",
      nextPayDate: "",
      bankName: "",
      routingNumber: "",
      transitNumber: "",
      institutionNumber: "",
      bsbNumber: "",
      accountNumber: "",
      accountFrom: "",
      creditScore: "",
      loanAmount: "",
      previousLoan: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form submitted", values);
    },
  });
  

  const fields = [
    { key: "firstName", label: "First Name" },
    { key: "lastName", label: "Last Name" },
    { key: "address", label: "Address" },
    { key: "city", label: "City" },
    { key: "email", label: "Email" },
    { key: "dob", label: "DOB", type: "date" },
    { key: "personalNumber", label: "Personal Number" },
    { key: "alternateNumber", label: "Alternate Number" },
    { key: "employer", label: "Employer" },
    { key: "currentEmployer", label: "Current Employer" },
    { key: "occupation", label: "Occupation" },
    { key: "workNumber", label: "Work Number" },
    { key: "getPaid", label: "Get Paid" },
    { key: "incomeMonthly", label: "Income Monthly" },
    { key: "nextPayDate", label: "Next Paydate", type: "date" },
    { key: "bankName", label: "Bank Name" },
    { key: "accountNumber", label: "Account Number" },
    { key: "accountFrom", label: "Account From" },
    { key: "creditScore", label: "Credit Score" },
    { key: "loanAmount", label: "Loan Amount" },
    { key: "previousLoan", label: "Previous Loan" },
  ];

  if (countryCode === "US") {
    fields.splice(4, 0, { key: "state", label: "State" });
    fields.splice(5, 0, { key: "zipCode", label: "Zip Code" });
    fields.splice(6, 0, { key: "country", label: "Country" });
    fields.splice(7, 0, { key: "ssn", label: "SSN" });
    fields.splice(14, 0, { key: "routingNumber", label: "Routing Number" });
  } else if (countryCode === "GB") {
    fields.splice(4, 0, { key: "province", label: "Province" });
    fields.splice(5, 0, { key: "postalCode", label: "Postal Code" });
    fields.splice(6, 0, { key: "nin", label: "NIN" });
    fields.splice(14, 0, { key: "transitNumber", label: "Transit Number" });
    fields.splice(15, 0, { key: "institutionNumber", label: "Institution Number" });
  } else {
    fields.splice(4, 0, { key: "state", label: "State/Territory" });
    fields.splice(5, 0, { key: "postCode", label: "Post Code" });
    fields.splice(6, 0, { key: "tfn", label: "TFN" });
    fields.splice(14, 0, { key: "bsbNumber", label: "BSB Number" });
  }

  return (
    <div className="min-h-screen text-white flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-4xl">
        <h1 className="text-6xl font-normal mb-16 text-center">Apply Now</h1>
        <form onSubmit={formik.handleSubmit} className="gap-6 grid md:grid-cols-2 grid-cols-1">
          {fields.map(({ key, label, type }) => (
            <div key={key} className="space-y-4">
              <label htmlFor={key} className="block text-xl text-gray-400">{label}</label>
              <input
                type={type || "text"}
                id={key}
                name={key}
                value={formik.values[key]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`${formik.touched[key] && formik.errors[key] ? 'border border-red-500' : 'border-0'} w-full bg-[#070e227b] rounded-xl p-4 text-xl focus:ring-1 focus:ring-gray-400 placeholder:text-gray-600`}
              />
              {formik.touched[key] && formik.errors[key] && (
                <p className="text-red-500 text-sm">{formik.errors[key]}</p>
              )}
            </div>
          ))}
          <div className="flex justify-end md:col-span-2 mt-6">
            <button
              type="submit"
              className="bg-gray-200 hover:bg-gray-300 text-black px-8 py-4 rounded-full text-xl font-medium inline-flex items-center justify-center gap-2 transition-all duration-300 ease-in-out disabled:opacity-50 disabled:hover:bg-gray-200 min-w-[180px] h-[60px] w-full sm:w-auto"
            >
              <span>Submit Application</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
