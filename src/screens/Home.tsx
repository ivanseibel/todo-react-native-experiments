import { useContext } from "react";
import { View, Text, FlatList, TouchableOpacity, Image, SafeAreaView } from "react-native";
import { TasksContext, TasksStatus } from "../context/tasks";
import { NewTaskInput } from "../components/TaskInput";
import { styles } from "./styles";

export function Home() {
  const { tasks, addTask, changeTaskStatus, removeTask, tasksSummary } = useContext(TasksContext);
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <Image 
        source={require('../../assets/logo.png')}
        style={styles.logo}
      />

      {/* Input */}
      <NewTaskInput 
        onAddTask={addTask}
      />

      {/* Tasks Summary */}
      <View style={styles.tasksSummaryContainer}>
        {/* Tasks Summary Item - Created */}
        <View style={styles.tasksSummaryItemContainer}>
          <Text style={styles.tasksCreatedLabel}>
            Created:
          </Text>
          <View style={styles.summaryBadge}>
            <Text
              style={styles.summaryBadgeText}
            >
              {tasksSummary().total}
            </Text>
          </View>
        </View>

        {/* Tasks Summary Item - Done */}
        <View style={styles.tasksSummaryItemContainer}>
          <Text style={styles.tasksDoneLabel}>
            Done:
          </Text>
          <View style={styles.summaryBadge}>
            <Text
              style={styles.summaryBadgeText}
            >
              {tasksSummary().done}
            </Text>
          </View>
        </View>
      </View>

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