interface Comment {
  name: string;
  time: string;
  text: string;
  likes?: number;
  replies?: Comment[];
}

export default function SocialComments() {
  const comments: Comment[] = [
    {
      name: "Wilma Devon",
      time: "39 min",
      text: "Just ordered mine! Can't wait to try it. Has anyone received theirs yet?",
      likes: 12,
      replies: [
        {
          name: "Mary Vernon",
          time: "35 min",
          text: "Yes! Got mine last week and already seeing results. You're going to love it!",
          likes: 8
        }
      ]
    },
    {
      name: "Jessica Thompson",
      time: "1 h",
      text: "This is amazing! I've been using it for 2 weeks and my arms look so much better. Worth every penny!",
      likes: 24
    },
    {
      name: "Linda Martinez",
      time: "2 h",
      text: "Is the 50% off deal still available? I don't want to miss out!",
      likes: 15,
      replies: [
        {
          name: "Customer Support",
          time: "1 h",
          text: "Yes! The Halloween sale is still active. Order now to secure your discount!",
          likes: 6
        }
      ]
    },
    {
      name: "Patricia Anderson",
      time: "3 h",
      text: "I was skeptical but decided to try it with the 90-day guarantee. Best decision ever! My confidence is back.",
      likes: 31
    }
  ];

  return (
    <section className="max-w-4xl mx-auto px-4 py-12 md:py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
        What People Are Saying
      </h2>
      
      <div className="bg-white border border-gray-300 rounded-lg overflow-hidden">
        <div className="bg-gray-50 border-b border-gray-300 px-4 py-3">
          <p className="text-sm text-gray-600">
            <span className="font-semibold">{comments.length} Comments</span>
          </p>
        </div>
        
        <div className="divide-y divide-gray-200">
          {comments.map((comment, index) => (
            <div key={index} className="p-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">
                  {comment.name.charAt(0)}
                </div>
                
                <div className="flex-1">
                  <div className="mb-1">
                    <span className="font-semibold text-gray-900 text-sm">
                      {comment.name}
                    </span>
                    <span className="text-gray-500 text-xs ml-2">
                      {comment.time}
                    </span>
                  </div>
                  
                  <p className="text-gray-700 text-sm mb-2">
                    {comment.text}
                  </p>
                  
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <button className="hover:text-blue-600 font-semibold">
                      Like {comment.likes && `(${comment.likes})`}
                    </button>
                    <button className="hover:text-blue-600 font-semibold">
                      Reply
                    </button>
                  </div>
                  
                  {comment.replies && comment.replies.length > 0 && (
                    <div className="mt-3 ml-4 space-y-3">
                      {comment.replies.map((reply, replyIndex) => (
                        <div key={replyIndex} className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-teal-400 rounded-full flex items-center justify-center text-white font-semibold text-xs flex-shrink-0">
                            {reply.name.charAt(0)}
                          </div>
                          
                          <div className="flex-1">
                            <div className="mb-1">
                              <span className="font-semibold text-gray-900 text-sm">
                                {reply.name}
                              </span>
                              <span className="text-gray-500 text-xs ml-2">
                                {reply.time}
                              </span>
                            </div>
                            
                            <p className="text-gray-700 text-sm mb-2">
                              {reply.text}
                            </p>
                            
                            <div className="flex items-center gap-4 text-xs text-gray-500">
                              <button className="hover:text-blue-600 font-semibold">
                                Like {reply.likes && `(${reply.likes})`}
                              </button>
                              <button className="hover:text-blue-600 font-semibold">
                                Reply
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
