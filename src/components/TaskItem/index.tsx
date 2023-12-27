import { useContext } from "react";
import { TouchableOpacity, View, Text, Image } from "react-native"
import { TasksContext, TasksStatus } from "../../context/tasks";
import { styles } from "./styles";

type TaskItemProps = {
  item: {
    id: number;
    title: string;
    status: string;
  }
};

export function TaskItem({ item }: TaskItemProps) {
  const { changeTaskStatus, removeTask } = useContext(TasksContext);

  return (
    <View style={styles.taskItemContainer}>
      {/* Checkbox and Title */}
      <TouchableOpacity
        style={styles.checkboxTitleContainer}
        onPress={() => {
          changeTaskStatus(item.id, item.status === TasksStatus.PENDING ? TasksStatus.DONE : TasksStatus.PENDING)
        }}
      >
        <View
        style={styles.checkboxContainer}
        >
          {
            item.status === 'done' &&
            // <View style={styles.checkboxDone} />
            <Image 
              source={require('../../../assets/done.png')}
            /> 
          }
        </View>

        <Text 
          style={[
            {
              color: item.status === 'done' ? '#808080' : '#fff',
              textDecorationLine: item.status === 'done' ? 'line-through' : 'none',
            },
            styles.taskTitle
          ]}>
          {item.title}
        </Text>
      </TouchableOpacity>
      
      {/* Remove button */}
      <TouchableOpacity 
        onPress={() => removeTask(item.id)}
        style={styles.removeButtonContainer}
      >
        <Image 
          source={require('../../../assets/bin.png')} 
          // style={styles.removeButtonImage} 
        />
      </TouchableOpacity>
    </View>
  )
}