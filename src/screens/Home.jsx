import React from 'react';
import {useState} from 'react';
import {SafeAreaView, Button} from "react-native";
import ToDoList from "../components/ToDoList";
import ToDoForm from "../components/ToDoForm";
import MainLayout from '../layouts/MainLayout';


function Home({navigation}) {
    const [tasks, setTasks] = useState([
        'Do laundry',
        'Go to gym',
        'Walk dog',
        'Study'
      ]);
    
      const handleAdd = (newTask) => {
        //setTasks(tasks.concat(newTask))
        setTasks([...tasks, newTask]);
      };

  return (
    <>
      <MainLayout>
        <SafeAreaView>
          <ToDoList tasks={tasks}/>
          <ToDoForm onAdd={handleAdd}/>
          <Button
            title="Go to About"
            onPress={() => navigation.navigate('About')}
          />
        </SafeAreaView>
      </MainLayout>
    </>
    );
}

export default Home;