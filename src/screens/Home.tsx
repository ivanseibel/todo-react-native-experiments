import { useContext } from "react";
import { View, Text, FlatList, TouchableOpacity, Image, SafeAreaView } from "react-native";
import { TasksContext, TasksStatus } from "../context/tasks";
import { NewTaskInput } from "../components/TaskInput";

export function Home() {
  const { tasks, addTask, changeTaskStatus, removeTask } = useContext(TasksContext);
  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: '#0D0D0D',
      paddingTop: 30,
      paddingHorizontal: 20,
    }}>
      <Image 
        source={require('../../assets/logo.png')}
        style={{
          alignSelf: 'center',
          marginBottom: 20,
          marginTop: 50,
        }}
      />

      {/* Input */}
      <NewTaskInput 
        onAddTask={addTask}
      />

      <FlatList 
        data={tasks}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          // Visual component to display and change status 
          <View style={{
            flexDirection: 'row',
            marginBottom: 20,
            alignItems: 'center',
            gap: 20,
          }}>
            {/* Checkbox and Title */}
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                flex: 1,
                gap: 10,
                borderWidth: 1,
                borderColor: '#000',
                height: 40,
              }}
              onPress={() => {
                changeTaskStatus(item.id, item.status === TasksStatus.PENDING ? TasksStatus.DONE : TasksStatus.PENDING)
              }}
            >
              <View
              style={{
                height: 20,
                width: 20,
                borderRadius: 12,
                borderWidth: 1,
                borderColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              >
                {
                  item.status === 'done' &&
                  <View style={{
                    height: 12,
                    width: 12,
                    borderRadius: 6,
                    backgroundColor: 'green',
                  }} />
                }
              </View>

              <Text 
                style={{
                  fontSize: 16, 
                  lineHeight: 16,
                  flex: 1,
                  color: item.status === 'done' ? '#808080' : '#fff',
                  textDecorationLine: item.status === 'done' ? 'line-through' : 'none',
              }}>
                {item.title}
              </Text>
            </TouchableOpacity>
            
            {/* Title */}
            {/* <Text 
              style={{
                fontSize: 16, 
                lineHeight: 16,
                flex: 1,
            }}>
              {item.title}
            </Text> */}
            
            {/* Remove button */}
            <TouchableOpacity onPress={() => removeTask(item.id)}>
              <View style={{
                height: 40,
                width: 40,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'red',
                borderRadius: 4,
              }}>
                <Text 
                  style={{
                    color: '#fff', 
                    fontSize: 20, 
                    lineHeight: 20
                }}>
                  -
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  )
}