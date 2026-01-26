import React, { useEffect, useState } from 'react' // Added useEffect
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; // Added useSelector
import { addToPaste, updateToPaste } from '../Redux/pasteSlice'; // Added updateToPaste

const Home = () => {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams(); // Fixed spelling

  const pasteId = searchParams.get("pasteId"); 
  const dispatch = useDispatch();
  
  // Get all pastes from store to find the one we want to edit
  const allPastes = useSelector((state) => state.paste.pastes);

  // This fills the inputs when you are in "Edit" mode
  useEffect(() => {
    if (pasteId) {
      const paste = allPastes.find((p) => p._id === pasteId);
      if (paste) {
        setTitle(paste.title);
        setValue(paste.content);
      }
    }
  }, [pasteId, allPastes]);

  function createPaste() {
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(), // Fixed spelling from "createaAt"
    }

    if (pasteId) {
      // update logic
      dispatch(updateToPaste(paste));
    } else {
      // create logic
      dispatch(addToPaste(paste));
    }

    // After creation and updation, clear everything
    setTitle("");
    setValue("");
    setSearchParams({}); // This removes the pasteId from the URL
  }

  return (
    <div className='p-4'>
      <div className='flex flex-row gap-7 place-content-between'>
        <input
          className='w-[67%] p-2 rounded-2xl mt-2 pl-4 border'
          type='text'
          placeholder='Enter Title Here' 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        
        <button 
          onClick={createPaste} 
          className='p-2 rounded-2xl mt-2 bg-blue-600 text-white'
        >
          {pasteId ? "Update Paste" : "Create My Paste"}
        </button>
      </div>

      <div className='mt-8'>
        <textarea
          className='border-2 rounded-2xl mt-4 min-w-[500px] p-4 w-full'
          value={value}
          placeholder="Enter Content Here"  
          onChange={(e) => setValue(e.target.value)}
          rows={20} 
        />
      </div>
    </div>
  )
}

export default Home