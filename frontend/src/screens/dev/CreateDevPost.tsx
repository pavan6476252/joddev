 
import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
 
import { Button, Chip, IconButton, Input, MenuItem, Select, Textarea, Typography, select, Option, Dialog, DialogBody, DialogHeader } from '@material-tailwind/react';
import authStore from '../../global/global';
import { DevCategories } from '../../routes/paths';
import Footer from '../../components/Footer';
import { GlobalNavbar } from '../../components/GlobalNavBar';
import { Link, useLocation } from 'react-router-dom'; 
 


import { Editor } from "novel";

function CreateDevPost() {




  const user = authStore(state => state.user)
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [categories, setCategories] = useState<string[]>([]);
  const [ready, setReady] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [keywords, setKeywords] = useState<string[]>();
  const location = useLocation()


  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleEnterPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (inputValue.trim() !== '') {
        setKeywords([...keywords ?? [], inputValue]);
        setInputValue('');
      }
    }
  };

  const handleCategoryChange = (cat: string | undefined) => {
    if (categories.includes(cat!) || cat === undefined) return;
    setCategories([...categories, cat]);
  };

  return (
    <div>
      <div className='z-50'>

        <GlobalNavbar />
      </div>
      <Dialog open={user ? false : true} handler={() => { }} >
        <DialogBody className='flex justify-center text-center'>
          <h1>Please login to continue</h1>
          <Link to={'/authenticate'}
            state={{ next: location.pathname }}
          >Login</Link>
        </DialogBody>
      </Dialog>


      {
        true ? <></> :
          <div className="z-10  absolute top-20 left-0 w-full h-full flex items-center justify-center  ">

            <div className={false ? " " : "h-1/2  w-1/2 max-w-screen-2xl mx-auto bg-pink-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-30 border border-gray-100 flex items-center justify-center"} >

              Login To continue

            </div>


          </div>

      }

      <div className={true ? 'container max-w-screen-2xl mx-auto mt-10' : 'hidden'}>
        <Input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          crossOrigin=""
          variant="static"
          label="Blog Title"
          className=""
          size="md"
          placeholder="Enter blog title here"
        />
        <div className="mt-10">
          <Textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            variant="static"
            label="Description"
            size="md"
            className=""
            placeholder="Enter short description"
          />
        </div>
        <div className="my-4">
          <Typography className="my-4">Select category</Typography>
          <div className="w-72">
            <Select
              label="Select Categories"
              onChange={(sel) => handleCategoryChange(sel)}
              animate={{
                mount: { y: 0 },
                unmount: { y: 25 },
              }}
            >
              {DevCategories.map((dev) => (
                <Option key={dev.title} value={dev.title}>
                  {dev.title}
                </Option>
              ))}
            </Select>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {categories.map((cat, idx) => (
            <Chip
              key={idx}
              className="font-medium text-md"
              animate={{
                mount: { y: 0 },
                unmount: { y: -50 },
              }}
              value={cat}
              onClose={() => {
                setKeywords(keywords?.filter((w) => w !== cat));
              }}
            />
          ))}
        </div>
        <div className="my-4">
          <Typography>Keywords</Typography>
        </div>
        {keywords?.length === 0 ? null : (
          <div className="flex flex-wrap gap-2 mb-4">
            {keywords?.map((word, idx) => (
              <Chip
                className="font-medium text-md"
                animate={{
                  mount: { y: 0 },
                  unmount: { y: 50 },
                }}
                value={word}
                onClose={() => {
                  setKeywords(keywords.filter((w) => w !== word));
                }}
              />
            ))}
          </div>
        )}
        <Input
          crossOrigin=""
          variant="outlined"
          placeholder="Press enter key to add keyword"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleEnterPress}
        />
        <Typography className="my-4">Content</Typography>

        <Editor className='w-full border rounded-xl ' onUpdate={(editor) => console.log(editor)} />

        {/* save buttons  */}
        <div className="w-full flex justify-end mt-5 gap-5 items-center ">

          {/* <Button disabled={user ? false : true} variant="outlined">
            <Typography className="text-sm caption-top">Draft</Typography>
          </Button> */}
          <Button disabled={user ? false : true} variant="outlined">
            <Typography className="text-sm caption-top">Publish</Typography>
          </Button>

        </div>
      </div>


      {/* loading animation */}
      <div className={true ? 'hidden' : 'max-w-screen-2xl mx-auto h-screen flex items-center'}>
        <div className="container text-center">
          <i className="bx bx-refresh text-8xl animate-spin inline-block" />
          <p>Loading</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default CreateDevPost;

