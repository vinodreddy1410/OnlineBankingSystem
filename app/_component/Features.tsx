import { MousePointerClick, GlobeIcon, WalletIcon } from "lucide-react";

const Features = () => {
  return (
    <div className="relative -mt-20 z-10 px-4">
      <div className="max-w-6xl mx-auto bg-white p-6 md:p-10 rounded-2xl shadow-lg">
        {/* Feature 1 */}
        <div className="bg-blue-100 p-6 rounded-xl mb-6">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">
                Easy payments with one tap
              </h2>
              <p className="text-gray-600 mb-4">
                Send and request money easily with anyone. No extra fees.
              </p>
              <button className="px-4 py-2 bg-white text-sm font-medium text-black rounded-full shadow">
                Explore products
              </button>
            </div>
            <MousePointerClick className="w-16 h-16 text-blue-300" />
          </div>
        </div>

        {/* Feature 2 & 3 */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Feature 2 */}
          <div className="bg-green-100 p-6 rounded-xl relative">
            <h2 className="text-xl font-bold mb-2">
              Get cash back and reward for every payment you do!
            </h2>
            <p className="text-gray-600 mb-10">
              Hundreds of deals and reward are waiting for you.
            </p>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white px-6 py-4 rounded-xl shadow text-sm flex items-center space-x-2">
              <WalletIcon className="w-5 h-5" />
              <span>+ 10 points cashback!</span>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="bg-purple-100 p-6 rounded-xl relative">
            <h2 className="text-xl font-bold mb-2">
              Send and receive payments from abroad
            </h2>
            <p className="text-gray-600 mb-10">
              Supporting 100+ countries. No hidden fees, unlimited.
            </p>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white px-6 py-4 rounded-xl shadow text-sm flex items-center space-x-2">
              <GlobeIcon className="w-5 h-5" />
              <span>Worldwide support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
