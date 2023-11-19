// CreateRoomScreen.tsx

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { createRoomAsync } from '../../../../store/room/roomSlice';
import { AppDispatch } from '../../../../store/store';
import { useAppSelector } from '../../../../store/hooks';
import RoomieNavbar from '../../utils/custom/RoomieNavbar';

export interface RoomData {
  title: string;
  description: string;
  location: string;
  price: string;
  images: FileList | null;
  amenities: string[];
  availability: boolean;
}

function CreateRoomScreen() {
  const dispatch = useDispatch<AppDispatch>();
  const roomStatus = useAppSelector(state => state.room.status);
  const roomError = useAppSelector(state => state.room.error);
  const [roomData, setRoomData] = useState<RoomData>({
    title: '',
    description: '',
    location: '',
    price: '',
    images: {} as FileList,
    amenities: [],
    availability: true,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setRoomData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedImages = e.target.files;
    setRoomData((prevData) => ({
      ...prevData,
      images: selectedImages || {} as FileList,
    }));
  };

  const handleAmenitiesChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedAmenities = Array.from(e.target.options)
      .filter((option) => option.selected)
      .map((option) => option.value);
    setRoomData((prevData) => ({
      ...prevData,
      amenities: selectedAmenities,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', roomData.title);
    formData.append('description', roomData.description);
    formData.append('location', roomData.location);
    formData.append('price', roomData.price);
    if (roomData.images)
      if (roomData.images.length > 0) {
        Array.from(roomData.images).forEach((image, index) => {
          formData.append(`images`, image);
        });
      }
    roomData.amenities.forEach((amenity, index) => {
      formData.append(`amenities[${index}]`, amenity);
    });
    formData.append('availability', String(roomData.availability));

    formData.append('mid', '65358b2b5c5a91339782cd7d');

    await dispatch(createRoomAsync(formData));

  };

  // <h2 className="text-2xl font-bold mb-4">Create Room</h2>
  // <h2 className="text-2xl font-bold mb-4">status {roomStatus}</h2>
  // <h2 className="text-2xl font-bold mb-4">error : {roomError}</h2>
  return (
    <div className="bg-gray-950 py-5 ">
      <div className=" container mx-auto   ">
        <div className='mb-4 sticky top-0 backdrop-blur-sm'>

          <RoomieNavbar />
        </div>

        <form onSubmit={handleSubmit} className="max-w-lg bg-gray-700 p-6 rounded-lg mx-auto">
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1 text-gray-200" htmlFor="title">
              Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={roomData.title}
              onChange={handleInputChange}
              className="w-full border p-2 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1 text-gray-200" htmlFor="description">
              Description:
            </label>
            <textarea
              id="description"
              name="description"
              value={roomData.description}
              onChange={handleInputChange}
              className="w-full border p-2 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1 text-gray-200" htmlFor="location">
              Location:
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={roomData.location}
              onChange={handleInputChange}
              className="w-full border p-2 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1 text-gray-200" htmlFor="price">
              Price:
            </label>
            <input
              type="text"
              id="price"
              name="price"
              value={roomData.price}
              onChange={handleInputChange}
              className="w-full border p-2 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1 text-gray-200" htmlFor="images">
              Upload Images:
            </label>
            <input type="file" id="images" name="images" onChange={handleImageChange} multiple />
          </div>
          {roomData.images && roomData.images.length > 0 && (
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1 text-gray-200">Selected Images:</label>
              <div className="flex gap-2">
                {Array.from(roomData.images).map((image, index) => (
                  <img
                    key={index}
                    src={URL.createObjectURL(image)}
                    alt={`selected-${index}`}
                    className="w-24 h-24 object-cover rounded"
                  />
                ))}
              </div>
            </div>
          )}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1 text-gray-200" htmlFor="amenities">
              Amenities:
            </label>
            <select
              id="amenities"
              name="amenities"
              value={roomData.amenities}
              onChange={handleAmenitiesChange}
              multiple
              className="w-full border p-2 rounded"
            >
              <option value="wifi">Wifi</option>
              <option value="parking">Parking</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1 text-gray-200" htmlFor="availability">
              Availability:
            </label>
            <input
              type="checkbox"
              id="availability"
              name="availability"
              checked={roomData.availability}
              onChange={() =>
                setRoomData((prevData) => ({
                  ...prevData,
                  availability: !prevData.availability,
                }))
              }
            />
          </div>

          <div className="mb-4">



            <button
              type="submit"
              className="bg-gray-900 w-full hover:bg-gray-600 text-white py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300 hover:text-gray-900 disabled:bg-gray-500"
              disabled={roomStatus != 'loading'}
            >
              { roomStatus!='loading'? "uploading..":
              "Create Room"}
            </button>

          </div>
        </form>
      </div>
    </div>


  );
}

export default CreateRoomScreen;
