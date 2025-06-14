import ProductPlans from '../_component/_products/ProductPlans';
import StepsSection from '../_component/_products/StepsSection';

export default function ProductsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Our Plans</h1>
      <ProductPlans />
      <StepsSection />
    </div>
  );
}
