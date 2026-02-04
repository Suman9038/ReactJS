import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [notes, setNotes] = useState([]);
  return (
    <div className="h-screen lg:flex bg-black text-white ">
      <form
        onSubmit={(events) => {
          events.preventDefault();
          // console.log(title);
          // console.log(detail);
          let copyNotes = [...notes];
          copyNotes.push({ title, detail });
          setNotes(copyNotes);
          // console.log(copyNotes);
          setTitle("");
          setDetail("");
        }}
        className="flex items-start gap-5 p-10 flex-col lg:w-1/2"
      >
        <h1 className="text-3xl font-bold">Add Notes</h1>

        <input
          type="text"
          placeholder="Enter Notes"
          className="px-5 py-2 font-medium w-1/2 border-2 outline-none rounded"
          value={title}
          onChange={(events) => {
            // console.log(events.target.value);
            setTitle(events.target.value);
          }}
        />
        <textarea
          type="text"
          placeholder="Enter Notes Details...."
          className="px-5 py-2 w-1/2 font-medium border-2 rounded h-32 outline-none"
          value={detail}
          onChange={(events) => {
            // console.log(events.target.value);
            setDetail(events.target.value);
          }}
        />
        <button className="bg-white w-1/2 font-medium text-black px-5 py-2 rounded outline-none active:bg-gray-400 active:scale-90">
          Add Notes
        </button>
      </form>
      <div className="lg:border-l-2 p-10 lg:w-1/2 ">
        <h1 className="text-3xl font-bold">Created Notes</h1>
        <div className="flex items-start justify-start flex-wrap gap-5 mt-5 overflow-auto h-full">
          {notes.map((note, index) => {
            return (
              <div
                key={index}
                className="flex justify-between items-start flex-col relative h-52 w-40 rounded-2xl pt-9 pb-5 px-4 py-9 text-black bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]"
              >
                <div>
                  <h3 className="leading-relaxed text-xl font-bold">
                    {note.title}
                  </h3>
                  <p className="mt-2 leading-relaxed font-medium text-gray-500">
                    {note.detail}
                  </p>
                </div>
                <button
                  onClick={(index) => {
                    // console.log("Deleted node");
                    let copyNotes = [...notes];
                    copyNotes.splice(index, 1);
                    setNotes(copyNotes);
                  }}
                  className="w-full cursor-pointer active:scale-90 bg-red-600 py-2 text-xs rounded-2xl font-bold text-white"
                >
                  Delete Note
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
