import { Avatar, Button, Divider } from '@heroui/react'
import React, { useState } from 'react'

const Profile = () => {
    const [isFollowed, setIsFollowed] = useState(false);

  return (<div className='flex justify-center'>


    <div className='w-full md:w-[600px] lg:w-[800px]'>

      <div className='overflow-hidden rounded-b-[35px] h-[100px] relative w-full'>
        {/* <div className=' bg-success-200 w-full h-full z-[1] absolute bottom-0'></div> */}
        <img src='https://images.pexels.com/photos/66997/pexels-photo-66997.jpeg?auto=compress&cs=tinysrgb&w=600' className='absolute bottom-0 w-full' />
        <div className=' z-[89] absolute bottom-2 left-[50%] translate-x-[-50%]'> <Avatar size='lg' isBordered /></div>
      </div>
      <div className='w-full mt-2 rounded-3xl bg-white p-3 mx-1'>
        <div className="space-y-1">
          <h4 className="text-medium font-medium text-center">abdellah ait bachikh</h4>
          <p className="text-small text-default-400 text-center">Beautiful, fast and modern React UI library.</p>
        </div>
        <Divider className="my-4" />
        <div className="flex h-5 items-center justify-center space-x-4 text-small">
          <div>12 followers</div>
          <Divider orientation="vertical" />
          <div>10 following</div>
          <Divider orientation="vertical" />
          <div> <Button
          className={isFollowed ? "bg-transparent text-foreground border-default-200" : ""}
          color="success"
          radius="full"
          size="sm"
          variant={isFollowed ? "bordered" : "shadow"}
          onPress={() => setIsFollowed(!isFollowed)}
        >
          {isFollowed ? "Unfollow" : "Follow"}
        </Button></div>
        </div>
      </div>
    </div>

  </div>
  )
}

export default Profile