import { useState } from 'react';
import CartCard from '../components/CartCard';
import Layout from '../components/layouts/Layout';
import { TCartInfo } from '../dto/productDTO';

function Reservations() {
	const [cartState, setCartState] = useState<TCartInfo[]>(JSON.parse(localStorage.getItem('cartInfo')!));

	const hasCartItem = cartState.filter((item: TCartInfo) => item.count > 0).length;

	const deleteItem = (idx: number) => {
		if (!window.confirm('상품을 삭제 하시겠습니까?')) return;

		if (cartState !== null) {
			const zeroCartCount: TCartInfo[] = cartState.map((item: TCartInfo) =>
				item.idx === idx ? { ...item, count: 0 } : item
			);

			localStorage.removeItem('cartInfo');
			localStorage.setItem('cartInfo', JSON.stringify(zeroCartCount));
			setCartState(zeroCartCount);
		}
	};

	const putItemCount = (count: number) => {
		console.log('Test', count);
	};

	return (
		<Layout>
			{hasCartItem < 1 ? (
				<div>예약 상품 없음</div>
			) : (
				cartState
					.filter((item: TCartInfo) => item.count > 0)
					.map((item: TCartInfo) => (
						<CartCard cartInfo={item} deleteItem={deleteItem} putItemCount={putItemCount} key={item.idx} />
					))
			)}
		</Layout>
	);
}

export default Reservations;
