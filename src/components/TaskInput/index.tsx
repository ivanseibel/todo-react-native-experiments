import { Image, TextInput, TextInputProps, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

type NewTaskInputProps = TextInputProps & {
  onAddTask: (taskTitle: string) => void;
};

export function NewTaskInput(props: NewTaskInputProps) {
  const [taskTitle, setTaskTitle] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  function handleAddNewTask() {
    props.onAddTask(taskTitle);
    setTaskTitle('');
  }

  return (
    <View
      style={styles.container}
    >
      <View
        style={[styles.inputContainer, { 
          borderColor: isFocused ? '#1E6F9F' : '#000',
          borderWidth: isFocused ? 1 : 0,
         }]}
      >
        <TextInput
          style={styles.input}
          placeholder="Add a new task"
          placeholderTextColor="#808080"
          {...props}
          value={taskTitle}
          onChangeText={setTaskTitle}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </View>
      <TouchableOpacity
        style={styles.addButton}
        onPress={handleAddNewTask}
      >
        <Image 
          source={require('../../../assets/plus.png')}
          style={styles.plusIcon}
        />
      </TouchableOpacity>
    </View>
    
  )
}