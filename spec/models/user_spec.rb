RSpec.describe User, :type => :model do

  let(:user) {
    User.create(
      username: "sav",
      email: "sav@sav.com",
      password: "sav"
    )
    }

    it "creates a valid user with name, email and password" do
      expect(user).to be_valid
    end

    it "doesn't allow for two users with the same username" do
      user
      sav2 = User.create(username: "sav", email:"sav@sav.com", password: "sav")
      expect(sav2).not_to be_valid
    end

end
