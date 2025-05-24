import { Avatar, Chip, Divider, User } from "@heroui/react"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full md:w-[600px] lg:w-[800px]  h-[calc(100vh-90px)]  p-6 md-p-8">
        <div className="w-full h-full bg-white bg-opacity-20 backdrop-blur-sm rounded-xl overflow-hidden overflow-y-auto p-2 flex flex-col">
          <div className="flex items-center justify-between w-full  hover:backdrop-blur-3xl p-3 rounded-xl">
            <div className="flex items-center gap-2 ">
              <Avatar isBordered />
              <div className="flex items-start flex-col">
                <div className="font-semibold">abdellah ait bachikh</div>
                <div>thi sis a meesssge</div>
              </div>
            </div>
            <Chip color="success">3</Chip>
          </div>
          <Divider className="my-1"/>
          <div className="flex items-center justify-between w-full  hover:backdrop-blur-3xl p-3 rounded-xl">
            <div className="flex items-center gap-2 ">
              <Avatar isBordered />
              <div className="flex items-start flex-col">
                <div className="font-semibold">abdellah ait bachikh</div>
                <div>thi sis a meesssge</div>
              </div>
            </div>
            <Chip color="success">3</Chip>
          </div>
          <Divider className="my-1"/>
          <div className="flex items-center justify-between w-full  hover:backdrop-blur-3xl p-3 rounded-xl">
            <div className="flex items-center gap-2 ">
              <Avatar isBordered />
              <div className="flex items-start flex-col">
                <div className="font-semibold">abdellah ait bachikh</div>
                <div>thi sis a meesssge</div>
              </div>
            </div>
            <Chip color="success">3</Chip>
          </div>
          <Divider className="my-1"/>
          <div className="flex items-center justify-between w-full  hover:backdrop-blur-3xl p-3 rounded-xl">
            <div className="flex items-center gap-2 ">
              <Avatar isBordered />
              <div className="flex items-start flex-col">
                <div className="font-semibold">abdellah ait bachikh</div>
                <div>thi sis a meesssge</div>
              </div>
            </div>
            <Chip color="success">3</Chip>
          </div>
          <Divider className="my-1"/>
          <div className="flex items-center justify-between w-full  hover:backdrop-blur-3xl p-3 rounded-xl">
            <div className="flex items-center gap-2 ">
              <Avatar isBordered />
              <div className="flex items-start flex-col">
                <div className="font-semibold">abdellah ait bachikh</div>
                <div>thi sis a meesssge</div>
              </div>
            </div>
            <Chip color="success">3</Chip>
          </div>
          <Divider className="my-1"/>
          <div className="flex items-center justify-between w-full  hover:backdrop-blur-3xl p-3 rounded-xl">
            <div className="flex items-center gap-2 ">
              <Avatar isBordered />
              <div className="flex items-start flex-col">
                <div className="font-semibold">abdellah ait bachikh</div>
                <div>thi sis a meesssge</div>
              </div>
            </div>
            <Chip color="success">3</Chip>
          </div>
          <Divider className="my-1"/>
          <div className="flex items-center justify-between w-full  hover:backdrop-blur-3xl p-3 rounded-xl">
            <div className="flex items-center gap-2 ">
              <Avatar isBordered />
              <div className="flex items-start flex-col">
                <div className="font-semibold">abdellah ait bachikh</div>
                <div>thi sis a meesssge</div>
              </div>
            </div>
            <Chip color="success">3</Chip>
          </div>
          <Divider className="my-1"/>
        </div>

      </div>
    </div>
  )
}

export default Home