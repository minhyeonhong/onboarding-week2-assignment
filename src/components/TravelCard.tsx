import { useDisclosure, Button, ButtonGroup, Card, Stack, Text, Heading, CardBody, CardFooter, Image, Divider } from '@chakra-ui/react';
import { ITravelProduct, TCartInfo } from '../dto/productDTO';
import TravelModal from './TravelModal';

type ProductProps = {
	product: ITravelProduct;
};

function TravelCard({ product }: ProductProps) {
	const { idx, name, mainImage, price, spaceCategory } = product;
	const { isOpen, onOpen, onClose } = useDisclosure();

	const setReservation = () => {
		if (!window.confirm('예약 하시겠습니까?')) return;

		const cartInfo: TCartInfo[] = JSON.parse(localStorage.getItem('cartInfo')!);

		if (cartInfo !== null) {
			const addCartCount: TCartInfo[] = cartInfo.map((item: TCartInfo) =>
				item.idx === idx ? { ...item, count: item.count + 1 } : item
			);
			// localStorage.removeItem('cartInfo');
			localStorage.setItem('cartInfo', JSON.stringify(addCartCount));
		}
	};

	return (
		<>
			<Card maxW='sm'>
				<CardBody>
					<Image
						src={mainImage} alt={`product_main_image_${idx}`}
						borderRadius='lg'
					/>
					<Stack mt='6' spacing='3'>
						<Text>번호{idx}</Text>

						<Heading size='md'>{name}</Heading>
						<Text>
							{spaceCategory}
						</Text>
						<Text color='blue.600' fontSize='2xl'>
							{price}원
						</Text>
					</Stack>
				</CardBody>
				<Divider />
				<CardFooter>
					<ButtonGroup spacing='2'>
						<Button colorScheme="yellow" type="button" onClick={setReservation}>
							예약하기
						</Button>
						<Button colorScheme="purple" type="button" onClick={onOpen}>
							상세정보
						</Button>
					</ButtonGroup>
				</CardFooter>
			</Card>
			<TravelModal isOpen={isOpen} onClose={onClose} idx={idx} />
		</>
	);
}

export default TravelCard;
