import { useState } from 'react';
import {
	Box,
	Button,
	ButtonGroup,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberIncrementStepper,
	NumberDecrementStepper,
	FormControl,
	FormLabel,
} from '@chakra-ui/react';
import { TCartInfo } from '../dto/productDTO';

type CartProps = {
	cartInfo: TCartInfo;
	deleteItem: (idx: number) => void;
	putItemCount: (count: number) => void;
};

function CartCard({ cartInfo, deleteItem, putItemCount }: CartProps): React.ReactElement {
	const { idx, name, mainImage, price, spaceCategory, count } = cartInfo;

	const [isEdit, setIsEdit] = useState<boolean>(false);

	const editHandle = () => {
		setIsEdit(!isEdit);
	};

	const onSubmit = (event: React.FormEvent<HTMLInputElement>) => {
		event.preventDefault();

		console.log('te', event);
	};

	return (
		<div>
			{!isEdit ? (
				<Box>
					count : {count}
					<Button colorScheme="yellow" size="xs" type="button" onClick={editHandle}>
						수량수정
					</Button>
				</Box>
			) : (
				<FormControl w="30%" onSubmit={onSubmit}>
					<FormLabel>count</FormLabel>
					<NumberInput defaultValue={count} min={1} max={10}>
						<NumberInputField />
						<NumberInputStepper>
							<NumberIncrementStepper />
							<NumberDecrementStepper />
						</NumberInputStepper>
					</NumberInput>
					<ButtonGroup gap="4">
						<Button colorScheme="yellow" size="xs" type="submit">
							수정하기
						</Button>
						<Button colorScheme="yellow" size="xs" type="button" onClick={editHandle}>
							수정취소
						</Button>
					</ButtonGroup>
				</FormControl>
			)}

			<Box>idx : {idx}</Box>
			<div>name : {name}</div>
			<div>
				<img src={mainImage} alt={`product_main_image_${idx}`} />
			</div>
			<div>price : {price}</div>
			<div>spaceCategory : {spaceCategory}</div>
			<ButtonGroup gap="4">
				<Button colorScheme="yellow" type="button" onClick={() => deleteItem(idx)}>
					삭제하기
				</Button>
			</ButtonGroup>
		</div>
	);
}

export default CartCard;
