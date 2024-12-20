import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectCount } from "./CartSlice";
import { TrashIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    price: "$90.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "$32.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
];

export default function Cart() {
  const count = useSelector(selectCount);
  const [cartProducts] = useState(products);

  return (
    <div className="lg:col-span-2">
    <div className="min-h-screen py-8 bg-gray-100">
        <div className="max-w-3xl px-4 mx-auto sm:px-6 lg:px-8">
            <div className="mt-4 bg-white rounded-lg shadow">
                <h1 className="flex items-start justify-start px-5 py-5 ml-2 text-3xl font-bold text-gray-900">
                    Cart
                </h1>
                <div className="px-4 py-6 sm:px-6">
                    <div className="flow-root">
                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {cartProducts.map((product) => (
                                <li key={product.id} className="flex py-6">
                                    <div className="flex-shrink-0 w-24 h-24 overflow-hidden border border-gray-200 rounded-md">
                                        <img src={product.imageSrc} alt={product.imageAlt} className="object-cover object-center w-full h-full" />
                                    </div>
                                    <div className="flex flex-col flex-1 ml-4">
                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                            <h3>
                                                <a href={product.href}>{product.name}</a>
                                            </h3>
                                            <p className="ml-4">{product.price}</p>
                                        </div>
                                        <p className="mt-1 text-sm text-gray-500">
                                            {product.color}
                                        </p>
                                        <div className="flex items-center justify-between flex-1 text-sm">
                                            <div className="flex items-center space-x-2 text-gray-500">
                                                <label htmlFor="quantity" className="text-sm font-medium leading-6 text-gray-900">
                                                    Qty
                                                </label>
                                                <select
                                                    id="quantity"
                                                    name="quantity"
                                                    className="border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                                >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                </select>
                                            </div>
                                            <div className="flex">
                                                <button type="button" className="inline-flex items-center px-2 py-1 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                                    <TrashIcon className="w-5 h-5 mr-1 text-red-500" aria-hidden="true" />
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="px-4 py-6 border-t border-gray-200 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>$262.00</p>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">
                        Shipping and taxes calculated at checkout.
                    </p>
                    <div className="mt-6">
                        <Link to="/checkout">
                            <button className="flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white bg-[#4F46E5] border border-transparent rounded-md shadow-sm hover:bg-[#4F46E5]">
                                Checkout
                            </button>
                        </Link>
                    </div>
                    <div className="flex justify-center mt-6 text-sm text-center text-gray-500">
                        <p>
                            or{" "}
                            <Link to="/">
                                <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Continue Shopping
                                    <span aria-hidden="true"> &rarr;</span>
                                </button>
                            </Link>
                        </p>
                    </div>
                    {/* Add additional links here */}
                    <div className="flex justify-center mt-4 text-sm text-center text-gray-500">
                        <Link to="/faq">
                            <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                                FAQ
                                <span aria-hidden="true"> &rarr;</span>
                            </button>
                        </Link>
                        <span className="mx-2">|</span>
                        <Link to="/contact">
                            <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Contact Us
                                <span aria-hidden="true"> &rarr;</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

  );
}
