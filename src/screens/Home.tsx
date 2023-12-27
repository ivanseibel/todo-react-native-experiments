import { useContext } from "react";
import { View, Text, FlatList, TouchableOpacity, Image, SafeAreaView } from "react-native";
import { TasksContext, TasksStatus } from "../context/tasks";
import { NewTaskInput } from "../components/TaskInput";
import { styles } from "./styles";
import { TaskItem } from "../components/TaskItem";

export function Home() {
  const { tasks, addTask, changeTaskStatus, removeTask, tasksSummary, orderedTasks } = useContext(TasksContext);
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <Image 
        source={require('../../assets/logo.png')}
        style={styles.logo}
      />

      {/* Input */}
      <View style={styles.inputContainer}>
        <NewTaskInput 
          onAddTask={addTask}
        />
      </View>

      <View style={styles.bodyContainer}>
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
          data={orderedTasks()}
          keyExtractor={item => String(item.id)}
          ListEmptyComponent={() => (
            <View style={styles.emptyTasksContainer}>
              <Image 
                source={require('../../assets/clipboard.png')}
              />
              <Text style={styles.emptyTasksTextBold}>
                You still don't have any tasks.
              </Text>
              <Text style={styles.emptyTasksText}>
                Create new tasks and organize your day!
              </Text>
            </View>
          
          )}
          renderItem={({ item }) => (
            <TaskItem 
              item={item}
            />
          )}
        />
      </View>
    </SafeAreaView>

  )
}