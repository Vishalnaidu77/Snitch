import React, { useEffect, useState } from 'react';
import useProduct from '../hooks/useProduct';

const currencyOptions = ['INR', 'USD', 'EUR', 'GBP', 'JPY'];

const CreateProduct = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priceAmount, setPriceAmount] = useState('');
  const [priceCurrency, setPriceCurrency] = useState('INR');
  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { handleAddProduct } = useProduct();

  useEffect(() => {
    const previews = images.map((file) => URL.createObjectURL(file));
    setImagePreviews(previews);

    return () => {
      previews.forEach((preview) => URL.revokeObjectURL(preview));
    };
  }, [images]);

  const handleImageChange = (e) => {
    const selectedFiles = Array.from(e.target.files || []);
    const nextFiles = [...images, ...selectedFiles].slice(0, 7);
    setImages(nextFiles);
    e.target.value = '';
  };

  const removeImage = (indexToRemove) => {
    setImages((currentImages) => currentImages.filter((_, index) => index !== indexToRemove));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    if (images.length === 0) {
      setMessage('Add at least one image to continue.');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('priceAmount', priceAmount);
    formData.append('priceCurrency', priceCurrency);

    images.forEach((image) => {
      formData.append('images', image);
    });

    setIsSubmitting(true);
    const response = await handleAddProduct(formData);
    setIsSubmitting(false);

    if (response?.success) {
      setTitle('');
      setDescription('');
      setPriceAmount('');
      setPriceCurrency('INR');
      setImages([]);
      setMessage('Product saved successfully.');
      return;
    }

    setMessage(response?.message || 'Unable to save product.');
  };

  return (
    <div className="min-h-screen bg-white px-6 py-10 sm:px-8 lg:px-10 flex items-center justify-center">
      <div className="w-full max-w-lg animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <div className="text-2xl font-light tracking-widest uppercase mb-10 text-center text-gray-900">
          Maison
        </div>

        <h2 className="text-3xl font-light mb-2 text-gray-900 text-center">Create Product</h2>
        <p className="text-gray-500 text-sm mb-10 font-light text-center">
          Keep the listing simple, clean, and complete.
        </p>

        <form className="space-y-7" onSubmit={handleSubmit}>
          <div className="relative group">
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="peer w-full border-b border-gray-300 bg-transparent py-3 text-sm text-gray-900 focus:border-black focus:outline-none transition-colors rounded-none shadow-none"
              placeholder=" "
              required
            />
            <label
              htmlFor="title"
              className="absolute left-0 top-3 -translate-y-5 text-xs text-gray-500 transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-sm peer-focus:-translate-y-5 peer-focus:text-xs peer-focus:text-black font-light cursor-text"
            >
              Title
            </label>
          </div>

          <div className="relative group">
            <textarea
              id="description"
              rows="5"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="peer w-full border-b border-gray-300 bg-transparent py-3 text-sm text-gray-900 focus:border-black focus:outline-none transition-colors rounded-none shadow-none resize-none"
              placeholder=" "
              required
            />
            <label
              htmlFor="description"
              className="absolute left-0 top-3 -translate-y-5 text-xs text-gray-500 transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-sm peer-focus:-translate-y-5 peer-focus:text-xs peer-focus:text-black font-light cursor-text"
            >
              Description
            </label>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="relative group">
              <input
                type="number"
                id="priceAmount"
                min="0"
                step="0.01"
                value={priceAmount}
                onChange={(e) => setPriceAmount(e.target.value)}
                className="peer w-full border-b border-gray-300 bg-transparent py-3 text-sm text-gray-900 focus:border-black focus:outline-none transition-colors rounded-none shadow-none"
                placeholder=" "
                required
              />
              <label
                htmlFor="priceAmount"
                className="absolute left-0 top-3 -translate-y-5 text-xs text-gray-500 transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-sm peer-focus:-translate-y-5 peer-focus:text-xs peer-focus:text-black font-light cursor-text"
              >
                Price Amount
              </label>
            </div>

            <div className="relative group">
              <select
                id="priceCurrency"
                value={priceCurrency}
                onChange={(e) => setPriceCurrency(e.target.value)}
                className="peer w-full border-b border-gray-300 bg-transparent py-3 text-sm text-gray-900 focus:border-black focus:outline-none transition-colors rounded-none shadow-none appearance-none"
                required
              >
                {currencyOptions.map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
              <label
                htmlFor="priceCurrency"
                className="absolute left-0 top-3 -translate-y-5 text-xs text-gray-500 transition-all peer-focus:-translate-y-5 peer-focus:text-xs peer-focus:text-black font-light cursor-text"
              >
                Price Currency
              </label>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-sm text-gray-900 font-light">Images</p>
                <p className="text-xs text-gray-500 font-light mt-1">
                  Upload up to 7 images. First image is used as the lead visual.
                </p>
              </div>
              <span className="text-xs text-gray-400 font-light">
                {images.length}/7
              </span>
            </div>

            <label className="flex min-h-28 cursor-pointer items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 px-6 py-8 text-center transition-colors hover:border-black hover:bg-white">
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageChange}
                className="hidden"
                disabled={images.length >= 7}
              />
              <div>
                <p className="text-sm font-light text-gray-900">Choose files or drag them here</p>
                <p className="mt-2 text-xs font-light text-gray-500">
                  JPEG, PNG, WEBP up to 5MB each.
                </p>
              </div>
            </label>

            {imagePreviews.length > 0 && (
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {imagePreviews.map((preview, index) => (
                  <div key={preview} className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white">
                    <img src={preview} alt={`Selected product ${index + 1}`} className="h-28 w-full object-cover" />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute right-2 top-2 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-medium tracking-wide text-gray-900 shadow-sm opacity-100 transition group-hover:bg-black group-hover:text-white"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {message && (
            <p className="text-sm font-light text-gray-500">{message}</p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-black text-white py-3.5 mt-2 text-sm font-light hover:bg-gray-900 transition-all active:scale-[0.99] rounded-xl flex justify-center items-center gap-2 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? 'Saving Product...' : 'Create Product'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;