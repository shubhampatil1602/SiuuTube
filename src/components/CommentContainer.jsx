import { commentsData } from "../utils/data";

const CommentContainer = () => {
  return (
    <div className='mt-6'>
      <h3 className='text-xl font-semibold'>Comments</h3>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentContainer;

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className='border-l pl-1 sm:pl-2 border-black dark:border-zinc-700 ml-1.5 sm:ml-3'>
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const Comment = ({ data }) => {
  return (
    <div className='flex items-start gap-3 p-2 rounded-md my-2 bg-slate-100 dark:bg-zinc-800'>
      <img
        src={data.image}
        alt='profile_image'
        className='h-10 w-10 rounded-full object-cover'
      />
      <div>
        <h5 className='font-semibold text-sm text-zinc-900 dark:text-zinc-100'>
          {data.name}
        </h5>
        <p className='text-gray-600 dark:text-zinc-400 tracking-tight'>
          {data.text}
        </p>
      </div>
    </div>
  );
};
