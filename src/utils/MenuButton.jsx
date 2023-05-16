import { TouchableOpacity } from "react-native";
import { Icon } from '@rneui/themed';

export default function MenuButton() {
    return (
        <TouchableOpacity>
            <Icon name='menu' />
        </TouchableOpacity>
    );
}