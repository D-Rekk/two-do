import Edit from "./edit"

export default function TopicList (){
  return (
    <>
      <div className="container mt-2 flex justify-between rounded-sm border py-6">
        <div>
        <h1 className="text-lg font-bold">Topics List</h1>
        <div>Description</div>
        </div>
        <div>
          <Edit/>
        </div>
      </div>
    </>

  )
}