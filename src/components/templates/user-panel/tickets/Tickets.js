import Link from "next/link";

// Components
import Button from "@/components/modules/Button/Button";
import Alert from "@/components/modules/Alert/Alert";
import Cart from "../index/Cart";

export default function Tickets({ tickets }) {
  return (
    <div className='p-5'>
      <div className=" flex justify-between items-center border-b-1 pb-3">
        <span className=' text-xl'>تیکت های پشتیبانی</span>
        <Link href={'/p-user/tickets/send-ticket'}>
          <Button type={'simple'} text={"ارسال تیکت جدید"} />
        </Link>
      </div>
      <div className=" mt-5">
        <div className=" bg-white text-secondary rounded-2xl p-5">

        {
          tickets ? (
            tickets.map(ticket => (
              <Cart key={ticket._id} title={ticket.title} date={ticket.createdAt} condition={ticket.hasAccept} support={ticket.department.title} />
            ))
          ) : (
            <Alert title={"تیکتی وجود ندارد"} text={"هنوز هیچ تیکتی به پشتیبانی ارسال نکرده اید!"} buttonText={'ارسال تیکت جدید'} route={'/p-user/tickets/send-ticket'}/>
          )
        }
        </div>
      </div>
    </div>
  )
}