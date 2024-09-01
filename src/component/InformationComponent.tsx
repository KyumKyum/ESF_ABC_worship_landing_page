function InformationComponent() {
  


  return (
    <div className="relative w-full px-12">
      <div className="flex flex-col w-full justify-center">
        <p className="mb-16 font-bkk text-white text-center ">
          "There is another in the fire,<br/>
          Standing next to me. <br/>
          There is another in the waters, <br/>
          Holding back the seas"<br/><br/>
          <span className="italic">From: "Another in the Fire" <br/> by Hillsong UNITED and Daniel 3:24~25</span>
          </p>
        <p className="my-16 font-bkk text-white text-center">Wherever you're from,</p>
        <p className="my-16 font-bkk text-white text-center">Whatever you've been through,</p>
        <p className="my-16 font-bkk text-white text-center">He was always there with you.</p>
        <p className="my-16 font-bkk text-white text-center">Now we invite you to be with Him.</p>

        <p onClick={() => {window.open("https://docs.google.com/forms/d/1tKIzcDBJef-kylQAOMmcm-vrtQwxNtUrH-NkeynAcoQ/viewform?ts=66d43258&edit_requested=true")}} className="my-16 font-bkk text-white text-lg text-center underline underline-offset-8">Click here to reigster</p>
      </div>
    </div>
  );
}

export default InformationComponent;
