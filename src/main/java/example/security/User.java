package example.security;

public class User {
		
	@Override
	public String toString() {
		return "User [UserName=" + UserName + ", UserPw=" + UserPw + "]";
	}
	private String UserName;
	private String UserPw;
	public String getUserName() {
		return UserName;
	}
	public void setUserName(String userName) {
		UserName = userName;
	}
	public String getUserPw() {
		return UserPw;
	}
	public void setUserPw(String userPw) {
		UserPw = userPw;
	}
	
}