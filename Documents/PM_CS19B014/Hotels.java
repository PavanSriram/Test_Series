// CS19B014
import java.util.*;
import java.io.*;
public class Hotels {

	/**YOUR_ROLL_NUMBER */
	/**NOTE: The RETURN values of functions in the starter code are dummy and implementations are missing */
	static class Room {

	   private int roomNo;
	   private boolean isAirConditioned;
	   private boolean statusOfRoom = false;

	    // Constructor that takes Room number and airconditioned status as input
	    public Room(int roomNo, boolean isAirConditioned) {
	        this.roomNo = roomNo;
	        this.isAirConditioned = isAirConditioned;
	    }
	    // returns the room number of the room object
	    public int getRoomNo() {
	        return roomNo;
	    }
	    
	    // returns whether the room is airconditioned
	    public boolean isAirConditioned() {
	        return isAirConditioned;
	    }
	    // sets the airconditioned status of room to true or false
	    public void setAirConditioned(boolean status) {
	    	isAirConditioned = status;
	    }
	    // returns if the room is available for booking or is already reserved
	    public boolean isReserved() {
	        return statusOfRoom;
	    }
	    // set the status (Reserved or not) of the room
	    public void setReservedStatus(boolean status) {
	        statusOfRoom = status;
	    }
	}

	class Hotel {

	    /**MISSING PRIVATE ATTRIBUTES */

	    /** Constructor to instantiate the object. Takes in 3 parameters [Hotel id, Hotel name and Number of rooms]
	    All rooms are initally set to non-AC rooms. The Room No. of rooms are set in sequential order.
	    For ex: If the number of rooms are 5, they're given default Room Nos {1, 2, 3, 4, 5} */
		
		private int id;
		private String name;
		private int numberOfRooms;
		Room rm[] = new Room[numberOfRooms];
		{
		for(int i=0;i<numberOfRooms; i++) {
			rm[i] = new Room(i+1,false);
		}}
		
	    public Hotel(int id, String name, int numberOfRooms) {
	        this.id = id;
	        this.name = name;
	        this.numberOfRooms = numberOfRooms;
	    }

	    // returns the array of rooms that are NOT reserved    
	    public Room[] getAvailableRooms() {
	    	int cnt = numberOfRooms;
	        for(int i=0;i<numberOfRooms; i++) {
	        	if(rm[i].isReserved())
	        		cnt--;
	        }
	        Room room[] = new Room[cnt];
	        for(int i=0;i<numberOfRooms; i++) {
	        	if(!rm[i].isReserved())
	        		room[i] = new Room(i+1,rm[i].isAirConditioned());
	        }
	        return room;
	    }

	    // returns array all rooms [Both reserved and unreserved]
	    public Room[] getAllRooms() {
	        return rm;
	    }

	    // takes the room number as an input and returns the corresponding room object
	    public Room getRoomById(int roomNo) {
	        return rm[roomNo-1];
	    }

	    /** Modifies the airconditioned status of room. 
	    Takes Room number and AC-status as input and sets 
	    the AC-status of corresponding room to true/false
	    outputs true incase of successful operation. 
	    Incase of invalid inputs (like trying to set a non existant room)
	    the function returns a false */
	    public boolean ModifyRoomAirconditioned(int roomNo, boolean status) {
	        if(roomNo <= numberOfRooms) {
	        	rm[roomNo-1].setAirConditioned(status);
	        	return true;
	        }
	        return false;
	    }

	    /** Adds a new room to the hotel. Returns a true upon successful add. 
	    Returns false in-case of illegal operation like trying to add a room with 
	    existing Room Number OR in-case of unsuccessful add operation */
	    public boolean addRoom(int roomNo) {
	        Room[] rm1 = new Room[numberOfRooms+1];
	        numberOfRooms++;
	        if(roomNo<=numberOfRooms)
	        	return false;
	        return true;
	    }

	    /**Removes an existing room taking Room number as input. Returns a true incase
	    of successful deletion. Incase of unsuccessful deletion or illegal operation
	    like trying to remove a non-existing room, the function returns a false */
	    public boolean removeRoom(int roomNo) {
	        /**body */
	        return false;
	    }

	    /**Should set the status of any unreserved non-AC room to true. Incase all rooms
	    are reserved, it should return a false which implies that booking was unsuccessful
	    ONLY NON-AC ROOMS can be booked using this function */
	    public boolean bookRegularRoom() {
	        /**Implementation */
	        return true;
	    } 
	    
	    /**Overloaded function for booking a room that takes a specific Room number as Input.
	    Return a true on successful booking. Return a false in-case the room with the given 
	    number was already reserved, doesn't exist or is AC room.
	    ONLY NON-AC ROOMS can be booked using this function */
	    public boolean bookRegularRoom(int roomNo) {
	        /**Implementation */
	        return false;
	    }

	    /**Should set the status of any unreserved AC room to true. Incase all AC rooms
	    are reserved, it should return a false which implies that booking was unsuccessful
	    ONLY AC ROOMS can be booked using this function */
	    public boolean bookAirconditionedRoom() {
	        /**Implementation */
	        return true;
	    }

	    /**Overloaded function for booking an AC-room that takes a specific Room number as Input.
	    Return a true on successful booking. Return a false in-case the room with the given 
	    number was already reserved, doesn't exist or is non-AC room. 
	    ONLY AC ROOMS can be booked using this function */
	    public boolean bookAirconditionedRoom(int roomNo) {
	        /**Implementation */
	        return false;
	    }

	    /**Return true if any unreserved AC room is availabe, false otherwise */
	    public boolean isAirConditionedRoomAvailable() {
	        /**Implementation */
	        return true;
	    }
	} 

	public class Hotels {
	    public static void main(String[] args) {
	        
	    }
	}
}