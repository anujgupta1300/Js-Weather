// Modern Weather App JavaScript
class WeatherApp {
  constructor() {
    this.apiKey = "7d5e74e7b112e34001dc87b79a2fc7c3";
    this.apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    this.geoApiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
    this.currentUnit = 'C';
    this.currentTempC = null;
    this.currentTempF = null;
    this.selectedIndex = -1;
    
    // Popular cities database
    this.cities = [
      // Indian cities
      { name: 'Mumbai', country: 'IN', fullName: 'Mumbai, India' },
      { name: 'Delhi', country: 'IN', fullName: 'Delhi, India' },
      { name: 'Bangalore', country: 'IN', fullName: 'Bangalore, India' },
      { name: 'Chennai', country: 'IN', fullName: 'Chennai, India' },
      { name: 'Kolkata', country: 'IN', fullName: 'Kolkata, India' },
      { name: 'Hyderabad', country: 'IN', fullName: 'Hyderabad, India' },
      { name: 'Pune', country: 'IN', fullName: 'Pune, India' },
      { name: 'Ahmedabad', country: 'IN', fullName: 'Ahmedabad, India' },
      { name: 'Jaipur', country: 'IN', fullName: 'Jaipur, India' },
      { name: 'Surat', country: 'IN', fullName: 'Surat, India' },
      { name: 'Lucknow', country: 'IN', fullName: 'Lucknow, India' },
      { name: 'Kanpur', country: 'IN', fullName: 'Kanpur, India' },
      { name: 'Nagpur', country: 'IN', fullName: 'Nagpur, India' },
      { name: 'Indore', country: 'IN', fullName: 'Indore, India' },
      { name: 'Bhopal', country: 'IN', fullName: 'Bhopal, India' },
      { name: 'Visakhapatnam', country: 'IN', fullName: 'Visakhapatnam, India' },
      { name: 'Patna', country: 'IN', fullName: 'Patna, India' },
      { name: 'Vadodara', country: 'IN', fullName: 'Vadodara, India' },
      { name: 'Ghaziabad', country: 'IN', fullName: 'Ghaziabad, India' },
      { name: 'Ludhiana', country: 'IN', fullName: 'Ludhiana, India' },
      { name: 'Agra', country: 'IN', fullName: 'Agra, India' },
      { name: 'Nashik', country: 'IN', fullName: 'Nashik, India' },
      { name: 'Faridabad', country: 'IN', fullName: 'Faridabad, India' },
      { name: 'Meerut', country: 'IN', fullName: 'Meerut, India' },
      { name: 'Rajkot', country: 'IN', fullName: 'Rajkot, India' },
      { name: 'Varanasi', country: 'IN', fullName: 'Varanasi, India' },
      { name: 'Srinagar', country: 'IN', fullName: 'Srinagar, India' },
      { name: 'Aurangabad', country: 'IN', fullName: 'Aurangabad, India' },
      { name: 'Dhanbad', country: 'IN', fullName: 'Dhanbad, India' },
      { name: 'Amritsar', country: 'IN', fullName: 'Amritsar, India' },
      { name: 'Navi Mumbai', country: 'IN', fullName: 'Navi Mumbai, India' },
      { name: 'Allahabad', country: 'IN', fullName: 'Allahabad, India' },
      { name: 'Ranchi', country: 'IN', fullName: 'Ranchi, India' },
      { name: 'Coimbatore', country: 'IN', fullName: 'Coimbatore, India' },
      { name: 'Jabalpur', country: 'IN', fullName: 'Jabalpur, India' },
      { name: 'Gwalior', country: 'IN', fullName: 'Gwalior, India' },
      { name: 'Vijayawada', country: 'IN', fullName: 'Vijayawada, India' },
      { name: 'Jodhpur', country: 'IN', fullName: 'Jodhpur, India' },
      { name: 'Madurai', country: 'IN', fullName: 'Madurai, India' },
      { name: 'Raipur', country: 'IN', fullName: 'Raipur, India' },
      { name: 'Kota', country: 'IN', fullName: 'Kota, India' },
      { name: 'Guwahati', country: 'IN', fullName: 'Guwahati, India' },
      { name: 'Chandigarh', country: 'IN', fullName: 'Chandigarh, India' },
      { name: 'Thiruvananthapuram', country: 'IN', fullName: 'Thiruvananthapuram, India' },
      { name: 'Solapur', country: 'IN', fullName: 'Solapur, India' },
      { name: 'Mysore', country: 'IN', fullName: 'Mysore, India' },
      { name: 'Tiruppur', country: 'IN', fullName: 'Tiruppur, India' },
      { name: 'Gurgaon', country: 'IN', fullName: 'Gurgaon, India' },
      { name: 'Aligarh', country: 'IN', fullName: 'Aligarh, India' },
      { name: 'Jalandhar', country: 'IN', fullName: 'Jalandhar, India' },
      { name: 'Bhubaneswar', country: 'IN', fullName: 'Bhubaneswar, India' },
      { name: 'Salem', country: 'IN', fullName: 'Salem, India' },
      { name: 'Noida', country: 'IN', fullName: 'Noida, India' },
      { name: 'Jamshedpur', country: 'IN', fullName: 'Jamshedpur, India' },
      { name: 'Bhilai', country: 'IN', fullName: 'Bhilai, India' },
      { name: 'Cuttack', country: 'IN', fullName: 'Cuttack, India' },
      { name: 'Kochi', country: 'IN', fullName: 'Kochi, India' },
      { name: 'Udaipur', country: 'IN', fullName: 'Udaipur, India' },
      { name: 'Bhavnagar', country: 'IN', fullName: 'Bhavnagar, India' },
      { name: 'Dehradun', country: 'IN', fullName: 'Dehradun, India' },
      { name: 'Asansol', country: 'IN', fullName: 'Asansol, India' },
      { name: 'Nanded', country: 'IN', fullName: 'Nanded, India' },
      { name: 'Kolhapur', country: 'IN', fullName: 'Kolhapur, India' },
      { name: 'Ajmer', country: 'IN', fullName: 'Ajmer, India' },
      // International cities
      { name: 'New York', country: 'US', fullName: 'New York, United States' },
      { name: 'London', country: 'GB', fullName: 'London, United Kingdom' },
      { name: 'Paris', country: 'FR', fullName: 'Paris, France' },
      { name: 'Tokyo', country: 'JP', fullName: 'Tokyo, Japan' },
      { name: 'Sydney', country: 'AU', fullName: 'Sydney, Australia' },
      { name: 'Los Angeles', country: 'US', fullName: 'Los Angeles, United States' },
      { name: 'Chicago', country: 'US', fullName: 'Chicago, United States' },
      { name: 'Houston', country: 'US', fullName: 'Houston, United States' },
      { name: 'Philadelphia', country: 'US', fullName: 'Philadelphia, United States' },
      { name: 'Phoenix', country: 'US', fullName: 'Phoenix, United States' },
      { name: 'San Francisco', country: 'US', fullName: 'San Francisco, United States' },
      { name: 'Seattle', country: 'US', fullName: 'Seattle, United States' },
      { name: 'Denver', country: 'US', fullName: 'Denver, United States' },
      { name: 'Boston', country: 'US', fullName: 'Boston, United States' },
      { name: 'Las Vegas', country: 'US', fullName: 'Las Vegas, United States' },
      { name: 'Miami', country: 'US', fullName: 'Miami, United States' },
      { name: 'Atlanta', country: 'US', fullName: 'Atlanta, United States' },
      { name: 'Toronto', country: 'CA', fullName: 'Toronto, Canada' },
      { name: 'Vancouver', country: 'CA', fullName: 'Vancouver, Canada' },
      { name: 'Montreal', country: 'CA', fullName: 'Montreal, Canada' },
      { name: 'Berlin', country: 'DE', fullName: 'Berlin, Germany' },
      { name: 'Madrid', country: 'ES', fullName: 'Madrid, Spain' },
      { name: 'Rome', country: 'IT', fullName: 'Rome, Italy' },
      { name: 'Amsterdam', country: 'NL', fullName: 'Amsterdam, Netherlands' },
      { name: 'Brussels', country: 'BE', fullName: 'Brussels, Belgium' },
      { name: 'Vienna', country: 'AT', fullName: 'Vienna, Austria' },
      { name: 'Zurich', country: 'CH', fullName: 'Zurich, Switzerland' },
      { name: 'Stockholm', country: 'SE', fullName: 'Stockholm, Sweden' },
      { name: 'Copenhagen', country: 'DK', fullName: 'Copenhagen, Denmark' },
      { name: 'Oslo', country: 'NO', fullName: 'Oslo, Norway' },
      { name: 'Helsinki', country: 'FI', fullName: 'Helsinki, Finland' },
      { name: 'Moscow', country: 'RU', fullName: 'Moscow, Russia' },
      { name: 'Beijing', country: 'CN', fullName: 'Beijing, China' },
      { name: 'Shanghai', country: 'CN', fullName: 'Shanghai, China' },
      { name: 'Hong Kong', country: 'HK', fullName: 'Hong Kong' },
      { name: 'Singapore', country: 'SG', fullName: 'Singapore' },
      { name: 'Bangkok', country: 'TH', fullName: 'Bangkok, Thailand' },
      { name: 'Manila', country: 'PH', fullName: 'Manila, Philippines' },
      { name: 'Jakarta', country: 'ID', fullName: 'Jakarta, Indonesia' },
      { name: 'Kuala Lumpur', country: 'MY', fullName: 'Kuala Lumpur, Malaysia' },
      { name: 'Seoul', country: 'KR', fullName: 'Seoul, South Korea' },
      { name: 'Cairo', country: 'EG', fullName: 'Cairo, Egypt' },
      { name: 'Dubai', country: 'AE', fullName: 'Dubai, UAE' },
      { name: 'Istanbul', country: 'TR', fullName: 'Istanbul, Turkey' },
      { name: 'São Paulo', country: 'BR', fullName: 'São Paulo, Brazil' },
      { name: 'Rio de Janeiro', country: 'BR', fullName: 'Rio de Janeiro, Brazil' },
      { name: 'Buenos Aires', country: 'AR', fullName: 'Buenos Aires, Argentina' },
      { name: 'Mexico City', country: 'MX', fullName: 'Mexico City, Mexico' },
      { name: 'Lima', country: 'PE', fullName: 'Lima, Peru' },
      { name: 'Bogotá', country: 'CO', fullName: 'Bogotá, Colombia' },
      { name: 'Santiago', country: 'CL', fullName: 'Santiago, Chile' },
      { name: 'Melbourne', country: 'AU', fullName: 'Melbourne, Australia' },
      { name: 'Brisbane', country: 'AU', fullName: 'Brisbane, Australia' },
      { name: 'Perth', country: 'AU', fullName: 'Perth, Australia' },
      { name: 'Auckland', country: 'NZ', fullName: 'Auckland, New Zealand' },
      { name: 'Wellington', country: 'NZ', fullName: 'Wellington, New Zealand' },
      { name: 'Johannesburg', country: 'ZA', fullName: 'Johannesburg, South Africa' },
      { name: 'Cape Town', country: 'ZA', fullName: 'Cape Town, South Africa' },
      { name: 'Lagos', country: 'NG', fullName: 'Lagos, Nigeria' },
      { name: 'Nairobi', country: 'KE', fullName: 'Nairobi, Kenya' },
      { name: 'Casablanca', country: 'MA', fullName: 'Casablanca, Morocco' },
      // Bangladeshi cities
      { name: 'Dhaka', country: 'BD', fullName: 'Dhaka, Bangladesh' },
      { name: 'Chittagong', country: 'BD', fullName: 'Chittagong, Bangladesh' },
      { name: 'Sylhet', country: 'BD', fullName: 'Sylhet, Bangladesh' },
      { name: 'Rajshahi', country: 'BD', fullName: 'Rajshahi, Bangladesh' },
      { name: 'Khulna', country: 'BD', fullName: 'Khulna, Bangladesh' },
      { name: 'Barisal', country: 'BD', fullName: 'Barisal, Bangladesh' },
      { name: 'Rangpur', country: 'BD', fullName: 'Rangpur, Bangladesh' },
      { name: 'Mymensingh', country: 'BD', fullName: 'Mymensingh, Bangladesh' },
      { name: 'Comilla', country: 'BD', fullName: 'Comilla, Bangladesh' },
      { name: 'Narayanganj', country: 'BD', fullName: 'Narayanganj, Bangladesh' },
      { name: 'Gazipur', country: 'BD', fullName: 'Gazipur, Bangladesh' },
      { name: 'Tongi', country: 'BD', fullName: 'Tongi, Bangladesh' },
      { name: 'Bogra', country: 'BD', fullName: 'Bogra, Bangladesh' },
      { name: 'Jessore', country: 'BD', fullName: 'Jessore, Bangladesh' },
      { name: 'Dinajpur', country: 'BD', fullName: 'Dinajpur, Bangladesh' },
      { name: 'Tangail', country: 'BD', fullName: 'Tangail, Bangladesh' },
      { name: 'Jamalpur', country: 'BD', fullName: 'Jamalpur, Bangladesh' },
      { name: 'Pabna', country: 'BD', fullName: 'Pabna, Bangladesh' },
      { name: 'Sirajganj', country: 'BD', fullName: 'Sirajganj, Bangladesh' },
      { name: 'Kushtia', country: 'BD', fullName: 'Kushtia, Bangladesh' },
      { name: 'Faridpur', country: 'BD', fullName: 'Faridpur, Bangladesh' },
      { name: 'Brahmanbaria', country: 'BD', fullName: 'Brahmanbaria, Bangladesh' },
      { name: 'Kishoreganj', country: 'BD', fullName: 'Kishoreganj, Bangladesh' },
      { name: 'Habiganj', country: 'BD', fullName: 'Habiganj, Bangladesh' },
      { name: 'Moulvibazar', country: 'BD', fullName: 'Moulvibazar, Bangladesh' },
      { name: 'Sunamganj', country: 'BD', fullName: 'Sunamganj, Bangladesh' },
      { name: 'Narsingdi', country: 'BD', fullName: 'Narsingdi, Bangladesh' },
      { name: 'Manikganj', country: 'BD', fullName: 'Manikganj, Bangladesh' },
      { name: 'Munshiganj', country: 'BD', fullName: 'Munshiganj, Bangladesh' },
      { name: 'Gopalganj', country: 'BD', fullName: 'Gopalganj, Bangladesh' },
      { name: 'Madaripur', country: 'BD', fullName: 'Madaripur, Bangladesh' },
      { name: 'Shariatpur', country: 'BD', fullName: 'Shariatpur, Bangladesh' },
      { name: 'Rajbari', country: 'BD', fullName: 'Rajbari, Bangladesh' },
      { name: 'Magura', country: 'BD', fullName: 'Magura, Bangladesh' },
      { name: 'Jhenaidah', country: 'BD', fullName: 'Jhenaidah, Bangladesh' },
      { name: 'Chuadanga', country: 'BD', fullName: 'Chuadanga, Bangladesh' },
      { name: 'Meherpur', country: 'BD', fullName: 'Meherpur, Bangladesh' },
      { name: 'Narail', country: 'BD', fullName: 'Narail, Bangladesh' },
      { name: 'Satkhira', country: 'BD', fullName: 'Satkhira, Bangladesh' },
      { name: 'Bagerhat', country: 'BD', fullName: 'Bagerhat, Bangladesh' },
      { name: 'Pirojpur', country: 'BD', fullName: 'Pirojpur, Bangladesh' },
      { name: 'Jhalokati', country: 'BD', fullName: 'Jhalokati, Bangladesh' },
      { name: 'Patuakhali', country: 'BD', fullName: 'Patuakhali, Bangladesh' },
      { name: 'Barguna', country: 'BD', fullName: 'Barguna, Bangladesh' },
      { name: 'Bhola', country: 'BD', fullName: 'Bhola, Bangladesh' },
      { name: 'Chandpur', country: 'BD', fullName: 'Chandpur, Bangladesh' },
      { name: 'Lakshmipur', country: 'BD', fullName: 'Lakshmipur, Bangladesh' },
      { name: 'Noakhali', country: 'BD', fullName: 'Noakhali, Bangladesh' },
      { name: 'Feni', country: 'BD', fullName: 'Feni, Bangladesh' },
      { name: 'Cox\'s Bazar', country: 'BD', fullName: 'Cox\'s Bazar, Bangladesh' },
      { name: 'Bandarban', country: 'BD', fullName: 'Bandarban, Bangladesh' },
      { name: 'Rangamati', country: 'BD', fullName: 'Rangamati, Bangladesh' },
      { name: 'Khagrachhari', country: 'BD', fullName: 'Khagrachhari, Bangladesh' },
      // Additional smaller cities and towns of Bangladesh
      { name: 'Maijdee', country: 'BD', fullName: 'Maijdee, Bangladesh' },
      { name: 'Teknaf', country: 'BD', fullName: 'Teknaf, Bangladesh' },
      { name: 'Ramu', country: 'BD', fullName: 'Ramu, Bangladesh' },
      { name: 'Ukhia', country: 'BD', fullName: 'Ukhia, Bangladesh' },
      { name: 'Chakaria', country: 'BD', fullName: 'Chakaria, Bangladesh' },
      { name: 'Lama', country: 'BD', fullName: 'Lama, Bangladesh' },
      { name: 'Naikhongchhari', country: 'BD', fullName: 'Naikhongchhari, Bangladesh' },
      { name: 'Ali Kadam', country: 'BD', fullName: 'Ali Kadam, Bangladesh' },
      { name: 'Thanchi', country: 'BD', fullName: 'Thanchi, Bangladesh' },
      { name: 'Rowangchhari', country: 'BD', fullName: 'Rowangchhari, Bangladesh' },
      { name: 'Ruma', country: 'BD', fullName: 'Ruma, Bangladesh' },
      { name: 'Belaichhari', country: 'BD', fullName: 'Belaichhari, Bangladesh' },
      { name: 'Kaptai', country: 'BD', fullName: 'Kaptai, Bangladesh' },
      { name: 'Langadu', country: 'BD', fullName: 'Langadu, Bangladesh' },
      { name: 'Nannerchar', country: 'BD', fullName: 'Nannerchar, Bangladesh' },
      { name: 'Rajasthali', country: 'BD', fullName: 'Rajasthali, Bangladesh' },
      { name: 'Baghaichhari', country: 'BD', fullName: 'Baghaichhari, Bangladesh' },
      { name: 'Barkal', country: 'BD', fullName: 'Barkal, Bangladesh' },
      { name: 'Kawkhali', country: 'BD', fullName: 'Kawkhali, Bangladesh' },
      { name: 'Belaichhari', country: 'BD', fullName: 'Belaichhari, Bangladesh' },
      { name: 'Juraichhari', country: 'BD', fullName: 'Juraichhari, Bangladesh' },
      { name: 'Kaukhali', country: 'BD', fullName: 'Kaukhali, Bangladesh' },
      { name: 'Dighinala', country: 'BD', fullName: 'Dighinala, Bangladesh' },
      { name: 'Panchari', country: 'BD', fullName: 'Panchari, Bangladesh' },
      { name: 'Matiranga', country: 'BD', fullName: 'Matiranga, Bangladesh' },
      { name: 'Guimara', country: 'BD', fullName: 'Guimara, Bangladesh' },
      { name: 'Ramgarh', country: 'BD', fullName: 'Ramgarh, Bangladesh' },
      { name: 'Patiya', country: 'BD', fullName: 'Patiya, Bangladesh' },
      { name: 'Anwara', country: 'BD', fullName: 'Anwara, Bangladesh' },
      { name: 'Boalkhali', country: 'BD', fullName: 'Boalkhali, Bangladesh' },
      { name: 'Chandanaish', country: 'BD', fullName: 'Chandanaish, Bangladesh' },
      { name: 'Fatikchhari', country: 'BD', fullName: 'Fatikchhari, Bangladesh' },
      { name: 'Hathazari', country: 'BD', fullName: 'Hathazari, Bangladesh' },
      { name: 'Lohagara', country: 'BD', fullName: 'Lohagara, Bangladesh' },
      { name: 'Mirsharai', country: 'BD', fullName: 'Mirsharai, Bangladesh' },
      { name: 'Rangunia', country: 'BD', fullName: 'Rangunia, Bangladesh' },
      { name: 'Raozan', country: 'BD', fullName: 'Raozan, Bangladesh' },
      { name: 'Sandwip', country: 'BD', fullName: 'Sandwip, Bangladesh' },
      { name: 'Satkania', country: 'BD', fullName: 'Satkania, Bangladesh' },
      { name: 'Sitakunda', country: 'BD', fullName: 'Sitakunda, Bangladesh' },
      { name: 'Banshkhali', country: 'BD', fullName: 'Banshkhali, Bangladesh' },
      { name: 'Bashkhali', country: 'BD', fullName: 'Bashkhali, Bangladesh' },
      { name: 'Chokoria', country: 'BD', fullName: 'Chokoria, Bangladesh' },
      { name: 'Kutubdia', country: 'BD', fullName: 'Kutubdia, Bangladesh' },
      { name: 'Maheshkhali', country: 'BD', fullName: 'Maheshkhali, Bangladesh' },
      { name: 'Pekua', country: 'BD', fullName: 'Pekua, Bangladesh' },
      { name: 'Companiganj', country: 'BD', fullName: 'Companiganj, Bangladesh' },
      { name: 'Daganbhuiyan', country: 'BD', fullName: 'Daganbhuiyan, Bangladesh' },
      { name: 'Parshuram', country: 'BD', fullName: 'Parshuram, Bangladesh' },
      { name: 'Sonagazi', country: 'BD', fullName: 'Sonagazi, Bangladesh' },
      { name: 'Chhagalnaiya', country: 'BD', fullName: 'Chhagalnaiya, Bangladesh' },
      { name: 'Begumganj', country: 'BD', fullName: 'Begumganj, Bangladesh' },
      { name: 'Chatkhil', country: 'BD', fullName: 'Chatkhil, Bangladesh' },
      { name: 'Companiganj', country: 'BD', fullName: 'Companiganj, Bangladesh' },
      { name: 'Hatiya', country: 'BD', fullName: 'Hatiya, Bangladesh' },
      { name: 'Kabirhat', country: 'BD', fullName: 'Kabirhat, Bangladesh' },
      { name: 'Senbagh', country: 'BD', fullName: 'Senbagh, Bangladesh' },
      { name: 'Subarnachar', country: 'BD', fullName: 'Subarnachar, Bangladesh' },
      { name: 'Chhagalnaiya', country: 'BD', fullName: 'Chhagalnaiya, Bangladesh' },
      { name: 'Ramganj', country: 'BD', fullName: 'Ramganj, Bangladesh' },
      { name: 'Ramgati', country: 'BD', fullName: 'Ramgati, Bangladesh' },
      { name: 'Raipur', country: 'BD', fullName: 'Raipur, Bangladesh' },
      { name: 'Kamalnagar', country: 'BD', fullName: 'Kamalnagar, Bangladesh' },
      { name: 'Matlab Dakshin', country: 'BD', fullName: 'Matlab Dakshin, Bangladesh' },
      { name: 'Matlab Uttar', country: 'BD', fullName: 'Matlab Uttar, Bangladesh' },
      { name: 'Hajiganj', country: 'BD', fullName: 'Hajiganj, Bangladesh' },
      { name: 'Kachua', country: 'BD', fullName: 'Kachua, Bangladesh' },
      { name: 'Shahrasti', country: 'BD', fullName: 'Shahrasti, Bangladesh' },
      { name: 'Haimchar', country: 'BD', fullName: 'Haimchar, Bangladesh' },
      { name: 'Daudkandi', country: 'BD', fullName: 'Daudkandi, Bangladesh' },
      { name: 'Homna', country: 'BD', fullName: 'Homna, Bangladesh' },
      { name: 'Laksam', country: 'BD', fullName: 'Laksam, Bangladesh' },
      { name: 'Muradnagar', country: 'BD', fullName: 'Muradnagar, Bangladesh' },
      { name: 'Nangalkot', country: 'BD', fullName: 'Nangalkot, Bangladesh' },
      { name: 'Cumilla Sadar', country: 'BD', fullName: 'Cumilla Sadar, Bangladesh' },
      { name: 'Meghna', country: 'BD', fullName: 'Meghna, Bangladesh' },
      { name: 'Monohargonj', country: 'BD', fullName: 'Monohargonj, Bangladesh' },
      { name: 'Sadarsouth', country: 'BD', fullName: 'Sadarsouth, Bangladesh' },
      { name: 'Titas', country: 'BD', fullName: 'Titas, Bangladesh' },
      { name: 'Burichong', country: 'BD', fullName: 'Burichong, Bangladesh' },
      { name: 'Debidwar', country: 'BD', fullName: 'Debidwar, Bangladesh' },
      { name: 'Nasirnagar', country: 'BD', fullName: 'Nasirnagar, Bangladesh' },
      { name: 'Sarail', country: 'BD', fullName: 'Sarail, Bangladesh' },
      { name: 'Ashuganj', country: 'BD', fullName: 'Ashuganj, Bangladesh' },
      { name: 'Akhaura', country: 'BD', fullName: 'Akhaura, Bangladesh' },
      { name: 'Nabinagar', country: 'BD', fullName: 'Nabinagar, Bangladesh' },
      { name: 'Bancharampur', country: 'BD', fullName: 'Bancharampur, Bangladesh' },
      { name: 'Bijoynagar', country: 'BD', fullName: 'Bijoynagar, Bangladesh' },
      { name: 'Austagram', country: 'BD', fullName: 'Austagram, Bangladesh' },
      { name: 'Bhairab', country: 'BD', fullName: 'Bhairab, Bangladesh' },
      { name: 'Hossainpur', country: 'BD', fullName: 'Hossainpur, Bangladesh' },
      { name: 'Itna', country: 'BD', fullName: 'Itna, Bangladesh' },
      { name: 'Karimganj', country: 'BD', fullName: 'Karimganj, Bangladesh' },
      { name: 'Katiadi', country: 'BD', fullName: 'Katiadi, Bangladesh' },
      { name: 'Pakundia', country: 'BD', fullName: 'Pakundia, Bangladesh' },
      { name: 'Tarail', country: 'BD', fullName: 'Tarail, Bangladesh' },
      { name: 'Bajitpur', country: 'BD', fullName: 'Bajitpur, Bangladesh' },
      { name: 'Kuliarchar', country: 'BD', fullName: 'Kuliarchar, Bangladesh' },
      { name: 'Mithamain', country: 'BD', fullName: 'Mithamain, Bangladesh' },
      { name: 'Nikli', country: 'BD', fullName: 'Nikli, Bangladesh' },
      { name: 'Bhaluka', country: 'BD', fullName: 'Bhaluka, Bangladesh' },
      { name: 'Dhobaura', country: 'BD', fullName: 'Dhobaura, Bangladesh' },
      { name: 'Fulbaria', country: 'BD', fullName: 'Fulbaria, Bangladesh' },
      { name: 'Gaffargaon', country: 'BD', fullName: 'Gaffargaon, Bangladesh' },
      { name: 'Gauripur', country: 'BD', fullName: 'Gauripur, Bangladesh' },
      { name: 'Haluaghat', country: 'BD', fullName: 'Haluaghat, Bangladesh' },
      { name: 'Ishwarganj', country: 'BD', fullName: 'Ishwarganj, Bangladesh' },
      { name: 'Muktagachha', country: 'BD', fullName: 'Muktagachha, Bangladesh' },
      { name: 'Nandail', country: 'BD', fullName: 'Nandail, Bangladesh' },
      { name: 'Phulpur', country: 'BD', fullName: 'Phulpur, Bangladesh' },
      { name: 'Trishal', country: 'BD', fullName: 'Trishal, Bangladesh' },
      { name: 'Tarakanda', country: 'BD', fullName: 'Tarakanda, Bangladesh' },
      // More smaller cities and administrative areas
      { name: 'Netrokona', country: 'BD', fullName: 'Netrokona, Bangladesh' },
      { name: 'Sherpur', country: 'BD', fullName: 'Sherpur, Bangladesh' },
      { name: 'Jhalokathi', country: 'BD', fullName: 'Jhalokathi, Bangladesh' },
      { name: 'Mathbaria', country: 'BD', fullName: 'Mathbaria, Bangladesh' },
      { name: 'Nazirpur', country: 'BD', fullName: 'Nazirpur, Bangladesh' },
      { name: 'Nesarabad', country: 'BD', fullName: 'Nesarabad, Bangladesh' },
      { name: 'Wazirpur', country: 'BD', fullName: 'Wazirpur, Bangladesh' },
      { name: 'Bhandaria', country: 'BD', fullName: 'Bhandaria, Bangladesh' },
      { name: 'Kaukhali', country: 'BD', fullName: 'Kaukhali, Bangladesh' },
      { name: 'Mathbaria', country: 'BD', fullName: 'Mathbaria, Bangladesh' },
      { name: 'Taltali', country: 'BD', fullName: 'Taltali, Bangladesh' },
      { name: 'Amtali', country: 'BD', fullName: 'Amtali, Bangladesh' },
      { name: 'Bamna', country: 'BD', fullName: 'Bamna, Bangladesh' },
      { name: 'Betagi', country: 'BD', fullName: 'Betagi, Bangladesh' },
      { name: 'Patharghata', country: 'BD', fullName: 'Patharghata, Bangladesh' },
      { name: 'Char Fasson', country: 'BD', fullName: 'Char Fasson, Bangladesh' },
      { name: 'Daulatkhan', country: 'BD', fullName: 'Daulatkhan, Bangladesh' },
      { name: 'Lalmohan', country: 'BD', fullName: 'Lalmohan, Bangladesh' },
      { name: 'Manpura', country: 'BD', fullName: 'Manpura, Bangladesh' },
      { name: 'Tazumuddin', country: 'BD', fullName: 'Tazumuddin, Bangladesh' },
      { name: 'Borhanuddin', country: 'BD', fullName: 'Borhanuddin, Bangladesh' },
      { name: 'Monpura', country: 'BD', fullName: 'Monpura, Bangladesh' },
      { name: 'Galachipa', country: 'BD', fullName: 'Galachipa, Bangladesh' },
      { name: 'Kalapara', country: 'BD', fullName: 'Kalapara, Bangladesh' },
      { name: 'Mirzaganj', country: 'BD', fullName: 'Mirzaganj, Bangladesh' },
      { name: 'Rangabali', country: 'BD', fullName: 'Rangabali, Bangladesh' },
      { name: 'Dumki', country: 'BD', fullName: 'Dumki, Bangladesh' },
      { name: 'Dashmina', country: 'BD', fullName: 'Dashmina, Bangladesh' },
      { name: 'Bauphal', country: 'BD', fullName: 'Bauphal, Bangladesh' },
      { name: 'Agailjhara', country: 'BD', fullName: 'Agailjhara, Bangladesh' },
      { name: 'Babuganj', country: 'BD', fullName: 'Babuganj, Bangladesh' },
      { name: 'Bakerganj', country: 'BD', fullName: 'Bakerganj, Bangladesh' },
      { name: 'Banari Para', country: 'BD', fullName: 'Banari Para, Bangladesh' },
      { name: 'Gaurnadi', country: 'BD', fullName: 'Gaurnadi, Bangladesh' },
      { name: 'Hizla', country: 'BD', fullName: 'Hizla, Bangladesh' },
      { name: 'Mehendiganj', country: 'BD', fullName: 'Mehendiganj, Bangladesh' },
      { name: 'Muladi', country: 'BD', fullName: 'Muladi, Bangladesh' },
      { name: 'Uzirpur', country: 'BD', fullName: 'Uzirpur, Bangladesh' },
      { name: 'Alamdanga', country: 'BD', fullName: 'Alamdanga, Bangladesh' },
      { name: 'Damurhuda', country: 'BD', fullName: 'Damurhuda, Bangladesh' },
      { name: 'Jibannagar', country: 'BD', fullName: 'Jibannagar, Bangladesh' },
      { name: 'Kaliganj', country: 'BD', fullName: 'Kaliganj, Bangladesh' },
      { name: 'Kotchandpur', country: 'BD', fullName: 'Kotchandpur, Bangladesh' },
      { name: 'Maheshpur', country: 'BD', fullName: 'Maheshpur, Bangladesh' },
      { name: 'Shailkupa', country: 'BD', fullName: 'Shailkupa, Bangladesh' },
      { name: 'Harinakunda', country: 'BD', fullName: 'Harinakunda, Bangladesh' },
      { name: 'Kalaroa', country: 'BD', fullName: 'Kalaroa, Bangladesh' },
      { name: 'Kaliganj', country: 'BD', fullName: 'Kaliganj, Bangladesh' },
      { name: 'Shyamnagar', country: 'BD', fullName: 'Shyamnagar, Bangladesh' },
      { name: 'Tala', country: 'BD', fullName: 'Tala, Bangladesh' },
      { name: 'Assasuni', country: 'BD', fullName: 'Assasuni, Bangladesh' },
      { name: 'Debhata', country: 'BD', fullName: 'Debhata, Bangladesh' },
      { name: 'Jhikargachha', country: 'BD', fullName: 'Jhikargachha, Bangladesh' },
      { name: 'Keshabpur', country: 'BD', fullName: 'Keshabpur, Bangladesh' },
      { name: 'Manirampur', country: 'BD', fullName: 'Manirampur, Bangladesh' },
      { name: 'Sharsha', country: 'BD', fullName: 'Sharsha, Bangladesh' },
      { name: 'Chaugachha', country: 'BD', fullName: 'Chaugachha, Bangladesh' },
      { name: 'Abhaynagar', country: 'BD', fullName: 'Abhaynagar, Bangladesh' },
      { name: 'Bagherpara', country: 'BD', fullName: 'Bagherpara, Bangladesh' },
      { name: 'Chougachha', country: 'BD', fullName: 'Chougachha, Bangladesh' },
      { name: 'Jhikargacha', country: 'BD', fullName: 'Jhikargacha, Bangladesh' },
      { name: 'Keshabpur', country: 'BD', fullName: 'Keshabpur, Bangladesh' },
      { name: 'Manirampur', country: 'BD', fullName: 'Manirampur, Bangladesh' },
      { name: 'Sharsha', country: 'BD', fullName: 'Sharsha, Bangladesh' },
      { name: 'Chitalmari', country: 'BD', fullName: 'Chitalmari, Bangladesh' },
      { name: 'Fakirhat', country: 'BD', fullName: 'Fakirhat, Bangladesh' },
      { name: 'Kachua', country: 'BD', fullName: 'Kachua, Bangladesh' },
      { name: 'Mollahat', country: 'BD', fullName: 'Mollahat, Bangladesh' },
      { name: 'Mongla', country: 'BD', fullName: 'Mongla, Bangladesh' },
      { name: 'Morrelganj', country: 'BD', fullName: 'Morrelganj, Bangladesh' },
      { name: 'Rampal', country: 'BD', fullName: 'Rampal, Bangladesh' },
      { name: 'Sarankhola', country: 'BD', fullName: 'Sarankhola, Bangladesh' },
      { name: 'Sharonkhola', country: 'BD', fullName: 'Sharonkhola, Bangladesh' },
      { name: 'Dacope', country: 'BD', fullName: 'Dacope, Bangladesh' },
      { name: 'Batiaghata', country: 'BD', fullName: 'Batiaghata, Bangladesh' },
      { name: 'Dighalia', country: 'BD', fullName: 'Dighalia, Bangladesh' },
      { name: 'Dumuria', country: 'BD', fullName: 'Dumuria, Bangladesh' },
      { name: 'Fultala', country: 'BD', fullName: 'Fultala, Bangladesh' },
      { name: 'Koyra', country: 'BD', fullName: 'Koyra, Bangladesh' },
      { name: 'Paikgachha', country: 'BD', fullName: 'Paikgachha, Bangladesh' },
      { name: 'Phultala', country: 'BD', fullName: 'Phultala, Bangladesh' },
      { name: 'Rupsa', country: 'BD', fullName: 'Rupsa, Bangladesh' },
      { name: 'Terokhada', country: 'BD', fullName: 'Terokhada, Bangladesh' },
      // Northern and other region cities
      { name: 'Kurigram', country: 'BD', fullName: 'Kurigram, Bangladesh' },
      { name: 'Lalmonirhat', country: 'BD', fullName: 'Lalmonirhat, Bangladesh' },
      { name: 'Nilphamari', country: 'BD', fullName: 'Nilphamari, Bangladesh' },
      { name: 'Panchagarh', country: 'BD', fullName: 'Panchagarh, Bangladesh' },
      { name: 'Thakurgaon', country: 'BD', fullName: 'Thakurgaon, Bangladesh' },
      { name: 'Gaibandha', country: 'BD', fullName: 'Gaibandha, Bangladesh' },
      { name: 'Pirganj', country: 'BD', fullName: 'Pirganj, Bangladesh' },
      { name: 'Badarganj', country: 'BD', fullName: 'Badarganj, Bangladesh' },
      { name: 'Gangachara', country: 'BD', fullName: 'Gangachara, Bangladesh' },
      { name: 'Kaunia', country: 'BD', fullName: 'Kaunia, Bangladesh' },
      { name: 'Mithapukur', country: 'BD', fullName: 'Mithapukur, Bangladesh' },
      { name: 'Pirgachha', country: 'BD', fullName: 'Pirgachha, Bangladesh' },
      { name: 'Pirganj', country: 'BD', fullName: 'Pirganj, Bangladesh' },
      { name: 'Taraganj', country: 'BD', fullName: 'Taraganj, Bangladesh' },
      { name: 'Chilmari', country: 'BD', fullName: 'Chilmari, Bangladesh' },
      { name: 'Phulbari', country: 'BD', fullName: 'Phulbari, Bangladesh' },
      { name: 'Nageshwari', country: 'BD', fullName: 'Nageshwari, Bangladesh' },
      { name: 'Bhurungamari', country: 'BD', fullName: 'Bhurungamari, Bangladesh' },
      { name: 'Char Rajibpur', country: 'BD', fullName: 'Char Rajibpur, Bangladesh' },
      { name: 'Rajarhat', country: 'BD', fullName: 'Rajarhat, Bangladesh' },
      { name: 'Rowmari', country: 'BD', fullName: 'Rowmari, Bangladesh' },
      { name: 'Ulipur', country: 'BD', fullName: 'Ulipur, Bangladesh' },
      { name: 'Aditmari', country: 'BD', fullName: 'Aditmari, Bangladesh' },
      { name: 'Hatibandha', country: 'BD', fullName: 'Hatibandha, Bangladesh' },
      { name: 'Kaliganj', country: 'BD', fullName: 'Kaliganj, Bangladesh' },
      { name: 'Patgram', country: 'BD', fullName: 'Patgram, Bangladesh' },
      { name: 'Tushbhandar', country: 'BD', fullName: 'Tushbhandar, Bangladesh' },
      { name: 'Dimla', country: 'BD', fullName: 'Dimla, Bangladesh' },
      { name: 'Domar', country: 'BD', fullName: 'Domar, Bangladesh' },
      { name: 'Jaldhaka', country: 'BD', fullName: 'Jaldhaka, Bangladesh' },
      { name: 'Kishoreganj', country: 'BD', fullName: 'Kishoreganj, Bangladesh' },
      { name: 'Syedpur', country: 'BD', fullName: 'Syedpur, Bangladesh' },
      { name: 'Atwari', country: 'BD', fullName: 'Atwari, Bangladesh' },
      { name: 'Boda', country: 'BD', fullName: 'Boda, Bangladesh' },
      { name: 'Debiganj', country: 'BD', fullName: 'Debiganj, Bangladesh' },
      { name: 'Tetulia', country: 'BD', fullName: 'Tetulia, Bangladesh' },
      { name: 'Baliadangi', country: 'BD', fullName: 'Baliadangi, Bangladesh' },
      { name: 'Haripur', country: 'BD', fullName: 'Haripur, Bangladesh' },
      { name: 'Pirganj', country: 'BD', fullName: 'Pirganj, Bangladesh' },
      { name: 'Ranisankail', country: 'BD', fullName: 'Ranisankail, Bangladesh' },
      // Sylhet division smaller cities
      { name: 'Barlekha', country: 'BD', fullName: 'Barlekha, Bangladesh' },
      { name: 'Kamalganj', country: 'BD', fullName: 'Kamalganj, Bangladesh' },
      { name: 'Kulaura', country: 'BD', fullName: 'Kulaura, Bangladesh' },
      { name: 'Rajnagar', country: 'BD', fullName: 'Rajnagar, Bangladesh' },
      { name: 'Sreemangal', country: 'BD', fullName: 'Sreemangal, Bangladesh' },
      { name: 'Chunarughat', country: 'BD', fullName: 'Chunarughat, Bangladesh' },
      { name: 'Bahubal', country: 'BD', fullName: 'Bahubal, Bangladesh' },
      { name: 'Lakhai', country: 'BD', fullName: 'Lakhai, Bangladesh' },
      { name: 'Madhabpur', country: 'BD', fullName: 'Madhabpur, Bangladesh' },
      { name: 'Nabiganj', country: 'BD', fullName: 'Nabiganj, Bangladesh' },
      { name: 'Bishwamvarpur', country: 'BD', fullName: 'Bishwamvarpur, Bangladesh' },
      { name: 'Chhatak', country: 'BD', fullName: 'Chhatak, Bangladesh' },
      { name: 'Derai', country: 'BD', fullName: 'Derai, Bangladesh' },
      { name: 'Dharamapasha', country: 'BD', fullName: 'Dharamapasha, Bangladesh' },
      { name: 'Dowarabazar', country: 'BD', fullName: 'Dowarabazar, Bangladesh' },
      { name: 'Jagannathpur', country: 'BD', fullName: 'Jagannathpur, Bangladesh' },
      { name: 'Jamalganj', country: 'BD', fullName: 'Jamalganj, Bangladesh' },
      { name: 'Sulla', country: 'BD', fullName: 'Sulla, Bangladesh' },
      { name: 'Tahirpur', country: 'BD', fullName: 'Tahirpur, Bangladesh' },
      { name: 'Beanibazar', country: 'BD', fullName: 'Beanibazar, Bangladesh' },
      { name: 'Bishwanath', country: 'BD', fullName: 'Bishwanath, Bangladesh' },
      { name: 'Companiganj', country: 'BD', fullName: 'Companiganj, Bangladesh' },
      { name: 'Fenchuganj', country: 'BD', fullName: 'Fenchuganj, Bangladesh' },
      { name: 'Golapganj', country: 'BD', fullName: 'Golapganj, Bangladesh' },
      { name: 'Gowainghat', country: 'BD', fullName: 'Gowainghat, Bangladesh' },
      { name: 'Jaintiapur', country: 'BD', fullName: 'Jaintiapur, Bangladesh' },
      { name: 'Kanaighat', country: 'BD', fullName: 'Kanaighat, Bangladesh' },
      { name: 'Osmani Nagar', country: 'BD', fullName: 'Osmani Nagar, Bangladesh' },
      { name: 'Zakiganj', country: 'BD', fullName: 'Zakiganj, Bangladesh' },
      // Central and western Bangladesh cities
      { name: 'Savar', country: 'BD', fullName: 'Savar, Bangladesh' },
      { name: 'Keraniganj', country: 'BD', fullName: 'Keraniganj, Bangladesh' },
      { name: 'Nawabganj', country: 'BD', fullName: 'Nawabganj, Bangladesh' },
      { name: 'Dohar', country: 'BD', fullName: 'Dohar, Bangladesh' },
      { name: 'Dhamrai', country: 'BD', fullName: 'Dhamrai, Bangladesh' },
      { name: 'Singair', country: 'BD', fullName: 'Singair, Bangladesh' },
      { name: 'Harirampur', country: 'BD', fullName: 'Harirampur, Bangladesh' },
      { name: 'Saturia', country: 'BD', fullName: 'Saturia, Bangladesh' },
      { name: 'Shibalaya', country: 'BD', fullName: 'Shibalaya, Bangladesh' },
      { name: 'Ghior', country: 'BD', fullName: 'Ghior, Bangladesh' },
      { name: 'Daulatpur', country: 'BD', fullName: 'Daulatpur, Bangladesh' },
      { name: 'Sirajdikhan', country: 'BD', fullName: 'Sirajdikhan, Bangladesh' },
      { name: 'Louhajang', country: 'BD', fullName: 'Louhajang, Bangladesh' },
      { name: 'Sreenagar', country: 'BD', fullName: 'Sreenagar, Bangladesh' },
      { name: 'Tongibari', country: 'BD', fullName: 'Tongibari, Bangladesh' },
      { name: 'Ghatail', country: 'BD', fullName: 'Ghatail, Bangladesh' },
      { name: 'Gopalpur', country: 'BD', fullName: 'Gopalpur, Bangladesh' },
      { name: 'Kalihati', country: 'BD', fullName: 'Kalihati, Bangladesh' },
      { name: 'Madhupur', country: 'BD', fullName: 'Madhupur, Bangladesh' },
      { name: 'Mirzapur', country: 'BD', fullName: 'Mirzapur, Bangladesh' },
      { name: 'Nagarpur', country: 'BD', fullName: 'Nagarpur, Bangladesh' },
      { name: 'Sakhipur', country: 'BD', fullName: 'Sakhipur, Bangladesh' },
      { name: 'Bhuapur', country: 'BD', fullName: 'Bhuapur, Bangladesh' },
      { name: 'Basail', country: 'BD', fullName: 'Basail, Bangladesh' },
      { name: 'Delduar', country: 'BD', fullName: 'Delduar, Bangladesh' },
      { name: 'Dhanbari', country: 'BD', fullName: 'Dhanbari, Bangladesh' },
      { name: 'Bakshiganj', country: 'BD', fullName: 'Bakshiganj, Bangladesh' },
      { name: 'Dewanganj', country: 'BD', fullName: 'Dewanganj, Bangladesh' },
      { name: 'Islampur', country: 'BD', fullName: 'Islampur, Bangladesh' },
      { name: 'Madarganj', country: 'BD', fullName: 'Madarganj, Bangladesh' },
      { name: 'Melandaha', country: 'BD', fullName: 'Melandaha, Bangladesh' },
      { name: 'Saghata', country: 'BD', fullName: 'Saghata, Bangladesh' },
      { name: 'Shajahanpur', country: 'BD', fullName: 'Shajahanpur, Bangladesh' },
      { name: 'Sundarganj', country: 'BD', fullName: 'Sundarganj, Bangladesh' },
      { name: 'Fulchhari', country: 'BD', fullName: 'Fulchhari, Bangladesh' },
      { name: 'Gobindaganj', country: 'BD', fullName: 'Gobindaganj, Bangladesh' },
      { name: 'Palashbari', country: 'BD', fullName: 'Palashbari, Bangladesh' },
      { name: 'Sadullapur', country: 'BD', fullName: 'Sadullapur, Bangladesh' },
      { name: 'Sariakandi', country: 'BD', fullName: 'Sariakandi, Bangladesh' },
      { name: 'Sherpur', country: 'BD', fullName: 'Sherpur, Bangladesh' },
      { name: 'Sonatala', country: 'BD', fullName: 'Sonatala, Bangladesh' },
      { name: 'Adamdighi', country: 'BD', fullName: 'Adamdighi, Bangladesh' },
      { name: 'Dhunat', country: 'BD', fullName: 'Dhunat, Bangladesh' },
      { name: 'Dhupchanchia', country: 'BD', fullName: 'Dhupchanchia, Bangladesh' },
      { name: 'Gabtali', country: 'BD', fullName: 'Gabtali, Bangladesh' },
      { name: 'Kahaloo', country: 'BD', fullName: 'Kahaloo, Bangladesh' },
      { name: 'Nandigram', country: 'BD', fullName: 'Nandigram, Bangladesh' },
      { name: 'Sariakandi', country: 'BD', fullName: 'Sariakandi, Bangladesh' },
      { name: 'Shajahanpur', country: 'BD', fullName: 'Shajahanpur, Bangladesh' },
      { name: 'Sherpur', country: 'BD', fullName: 'Sherpur, Bangladesh' },
      { name: 'Shibganj', country: 'BD', fullName: 'Shibganj, Bangladesh' },
      { name: 'Sonatala', country: 'BD', fullName: 'Sonatala, Bangladesh' },
      { name: 'Joypurhat', country: 'BD', fullName: 'Joypurhat, Bangladesh' },
      { name: 'Akkelpur', country: 'BD', fullName: 'Akkelpur, Bangladesh' },
      { name: 'Kalai', country: 'BD', fullName: 'Kalai, Bangladesh' },
      { name: 'Khetlal', country: 'BD', fullName: 'Khetlal, Bangladesh' },
      { name: 'Panchbibi', country: 'BD', fullName: 'Panchbibi, Bangladesh' },
      { name: 'Naogaon', country: 'BD', fullName: 'Naogaon, Bangladesh' },
      { name: 'Atrai', country: 'BD', fullName: 'Atrai, Bangladesh' },
      { name: 'Badalgachhi', country: 'BD', fullName: 'Badalgachhi, Bangladesh' },
      { name: 'Manda', country: 'BD', fullName: 'Manda, Bangladesh' },
      { name: 'Dhamoirhat', country: 'BD', fullName: 'Dhamoirhat, Bangladesh' },
      { name: 'Mohadevpur', country: 'BD', fullName: 'Mohadevpur, Bangladesh' },
      { name: 'Niamatpur', country: 'BD', fullName: 'Niamatpur, Bangladesh' },
      { name: 'Patnitala', country: 'BD', fullName: 'Patnitala, Bangladesh' },
      { name: 'Porsha', country: 'BD', fullName: 'Porsha, Bangladesh' },
      { name: 'Raninagar', country: 'BD', fullName: 'Raninagar, Bangladesh' },
      { name: 'Sapahar', country: 'BD', fullName: 'Sapahar, Bangladesh' },
      { name: 'Natore', country: 'BD', fullName: 'Natore, Bangladesh' },
      { name: 'Bagatipara', country: 'BD', fullName: 'Bagatipara, Bangladesh' },
      { name: 'Baraigram', country: 'BD', fullName: 'Baraigram, Bangladesh' },
      { name: 'Gurudaspur', country: 'BD', fullName: 'Gurudaspur, Bangladesh' },
      { name: 'Lalpur', country: 'BD', fullName: 'Lalpur, Bangladesh' },
      { name: 'Singra', country: 'BD', fullName: 'Singra, Bangladesh' }
    ];
    
    this.initializeElements();
    this.bindEvents();
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
  }

  initializeElements() {
    this.searchInput = document.querySelector('.search-input');
    this.searchBtn = document.querySelector('.search-btn');
    this.locationBtn = document.querySelector('.location-btn');
    this.errorMessage = document.querySelector('.error-message');
    this.loadingSpinner = document.querySelector('.loading-spinner');
    this.weatherContent = document.querySelector('.weather-content');
    this.weatherIcon = document.querySelector('.weather-icon');
    this.temperature = document.querySelector('.temperature');
    this.cityName = document.querySelector('.city-name');
    this.countryName = document.querySelector('.country-name');
    this.localTime = document.querySelector('.local-time');
    this.weatherDescription = document.querySelector('.weather-description');
    this.humidity = document.querySelector('.humidity');
    this.windSpeed = document.querySelector('.wind-speed');
    this.visibility = document.querySelector('.visibility');
    this.feelsLike = document.querySelector('.feels-like');
    this.pressure = document.querySelector('.pressure');
    this.uvIndex = document.querySelector('.uv-index');
    this.sunrise = document.querySelector('.sunrise');
    this.sunset = document.querySelector('.sunset');
    this.unitBtns = document.querySelectorAll('.unit-btn');
    this.cityDropdown = document.querySelector('.city-dropdown');
  }

  bindEvents() {
    this.searchBtn.addEventListener('click', () => this.handleSearch());
    this.searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        if (this.selectedIndex >= 0) {
          this.selectCity(this.selectedIndex);
        } else {
          this.handleSearch();
        }
      }
    });
    
    // Dropdown functionality
    this.searchInput.addEventListener('input', (e) => this.handleInputChange(e));
    this.searchInput.addEventListener('focus', () => this.showDropdown());
    this.searchInput.addEventListener('keydown', (e) => this.handleKeyNavigation(e));
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.search-wrapper')) {
        this.hideDropdown();
      }
    });
    
    this.locationBtn.addEventListener('click', () => this.getCurrentLocation());
    
    this.unitBtns.forEach(btn => {
      btn.addEventListener('click', () => this.toggleTemperatureUnit(btn.dataset.unit));
    });
  }

  showLoading() {
    this.loadingSpinner.style.display = 'flex';
    this.weatherContent.style.display = 'none';
    this.errorMessage.style.display = 'none';
  }

  hideLoading() {
    this.loadingSpinner.style.display = 'none';
  }

  showError(message = 'City not found. Please try again.') {
    this.errorMessage.querySelector('p').textContent = message;
    this.errorMessage.style.display = 'flex';
    this.weatherContent.style.display = 'none';
    this.hideLoading();
  }

  showWeather() {
    this.weatherContent.style.display = 'block';
    this.errorMessage.style.display = 'none';
    this.hideLoading();
  }

  async handleSearch() {
    const city = this.searchInput.value.trim();
    if (!city) return;
    
    await this.getWeatherData(city);
  }

  async getCurrentLocation() {
    if (!navigator.geolocation) {
      this.showError('Geolocation is not supported by this browser.');
      return;
    }

    this.showLoading();
    
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        await this.getWeatherByCoordinates(latitude, longitude);
      },
      () => {
        this.showError('Unable to retrieve your location.');
      }
    );
  }

  async getWeatherByCoordinates(lat, lon) {
    try {
      const response = await fetch(`${this.geoApiUrl}&lat=${lat}&lon=${lon}&appid=${this.apiKey}`);
      
      if (!response.ok) {
        throw new Error('Weather data not available');
      }
      
      const data = await response.json();
      this.updateWeatherDisplay(data);
    } catch (error) {
      this.showError('Unable to fetch weather data for your location.');
    }
  }

  async getWeatherData(city) {
    this.showLoading();
    
    try {
      const response = await fetch(`${this.apiUrl}${encodeURIComponent(city)}&appid=${this.apiKey}`);
      
      if (response.status === 404) {
        this.showError('City not found. Please check the spelling and try again.');
        return;
      }
      
      if (!response.ok) {
        throw new Error('Weather data not available');
      }
      
      const data = await response.json();
      this.updateWeatherDisplay(data);
    } catch (error) {
      this.showError('Unable to fetch weather data. Please try again later.');
    }
  }

  updateWeatherDisplay(data) {
    // Store temperature data
    this.currentTempC = Math.round(data.main.temp);
    this.currentTempF = Math.round((data.main.temp * 9/5) + 32);
    
    // Update basic info
    this.cityName.textContent = data.name;
    this.countryName.textContent = data.sys.country;
    this.weatherDescription.textContent = this.capitalizeWords(data.weather[0].description);
    
    // Update temperature
    this.updateTemperatureDisplay();
    
    // Update weather icon
    this.updateWeatherIcon(data.weather[0].main, data.weather[0].id);
    
    // Update details
    this.humidity.textContent = `${data.main.humidity}%`;
    this.windSpeed.textContent = `${Math.round(data.wind.speed * 3.6)} km/h`; // Convert m/s to km/h
    this.visibility.textContent = `${(data.visibility / 1000).toFixed(1)} km`;
    this.feelsLike.textContent = `${Math.round(data.main.feels_like)}°${this.currentUnit}`;
    this.pressure.textContent = `${data.main.pressure} hPa`;
    
    // UV Index (mock data as it's not in current weather API)
    this.uvIndex.textContent = this.calculateUVIndex(data.weather[0].id);
    
    // Sunrise and sunset
    this.sunrise.textContent = this.formatTime(data.sys.sunrise, data.timezone);
    this.sunset.textContent = this.formatTime(data.sys.sunset, data.timezone);
    
    this.showWeather();
    this.searchInput.value = '';
  }

  updateWeatherIcon(weatherMain, weatherId) {
    const iconMap = {
      'Clear': 'fas fa-sun',
      'Clouds': weatherId === 801 ? 'fas fa-cloud-sun' : 'fas fa-cloud',
      'Rain': 'fas fa-cloud-rain',
      'Drizzle': 'fas fa-cloud-drizzle',
      'Thunderstorm': 'fas fa-bolt',
      'Snow': 'fas fa-snowflake',
      'Mist': 'fas fa-smog',
      'Smoke': 'fas fa-smog',
      'Haze': 'fas fa-smog',
      'Dust': 'fas fa-smog',
      'Fog': 'fas fa-smog',
      'Sand': 'fas fa-smog',
      'Ash': 'fas fa-smog',
      'Squall': 'fas fa-wind',
      'Tornado': 'fas fa-tornado'
    };
    
    this.weatherIcon.className = `weather-icon ${iconMap[weatherMain] || 'fas fa-question'}`;
  }

  toggleTemperatureUnit(unit) {
    this.currentUnit = unit;
    
    // Update button states
    this.unitBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.unit === unit);
    });
    
    this.updateTemperatureDisplay();
  }

  updateTemperatureDisplay() {
    if (this.currentTempC !== null) {
      const temp = this.currentUnit === 'C' ? this.currentTempC : this.currentTempF;
      this.temperature.textContent = `${temp}°`;
      
      // Update feels like temperature
      if (this.feelsLike && this.feelsLike.textContent) {
        const feelsLikeTemp = this.feelsLike.textContent.replace(/[^\d-]/g, '');
        if (feelsLikeTemp) {
          const convertedFeelsLike = this.currentUnit === 'C' ? 
            feelsLikeTemp : Math.round((parseInt(feelsLikeTemp) * 9/5) + 32);
          this.feelsLike.textContent = `${convertedFeelsLike}°${this.currentUnit}`;
        }
      }
    }
  }

  calculateUVIndex(weatherId) {
    // Simple UV index estimation based on weather conditions
    if (weatherId >= 200 && weatherId < 300) return '2'; // Thunderstorm
    if (weatherId >= 300 && weatherId < 600) return '3'; // Drizzle/Rain
    if (weatherId >= 600 && weatherId < 700) return '2'; // Snow
    if (weatherId >= 700 && weatherId < 800) return '4'; // Atmosphere
    if (weatherId === 800) return '8'; // Clear
    if (weatherId > 800) return '6'; // Clouds
    return '5'; // Default
  }

  formatTime(timestamp, timezone) {
    const date = new Date((timestamp + timezone) * 1000);
    return date.toUTCString().slice(-12, -7);
  }

  capitalizeWords(str) {
    return str.split(' ').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  }

  updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', {
      hour12: true,
      hour: '2-digit',
      minute: '2-digit'
    });
    
    if (this.localTime) {
      this.localTime.textContent = timeString;
    }
  }

  // Dropdown functionality
  handleInputChange(e) {
    const query = e.target.value.toLowerCase().trim();
    this.selectedIndex = -1;
    
    if (query.length === 0) {
      this.hideDropdown();
      return;
    }
    
    this.filterAndShowCities(query);
  }
  
  filterAndShowCities(query) {
    const filteredCities = this.cities.filter(city => 
      city.name.toLowerCase().includes(query) || 
      city.fullName.toLowerCase().includes(query)
    ).slice(0, 8); // Limit to 8 results
    
    if (filteredCities.length === 0) {
      this.hideDropdown();
      return;
    }
    
    this.populateDropdown(filteredCities);
    this.showDropdown();
  }
  
  populateDropdown(cities) {
    this.cityDropdown.innerHTML = '';
    
    cities.forEach((city, index) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <i class="city-icon fas fa-map-marker-alt"></i>
        <div class="city-item">
          <div class="city-name">${city.name}</div>
          <div class="city-country">${this.getCountryName(city.country)}</div>
        </div>
      `;
      
      li.addEventListener('click', () => this.selectCity(index, cities));
      li.addEventListener('mouseenter', () => this.highlightCity(index));
      
      this.cityDropdown.appendChild(li);
    });
  }
  
  showDropdown() {
    this.cityDropdown.classList.add('show');
  }
  
  hideDropdown() {
    this.cityDropdown.classList.remove('show');
    this.selectedIndex = -1;
    this.clearHighlight();
  }
  
  selectCity(index, cities = null) {
    if (!cities) {
      const visibleCities = this.getVisibleCities();
      cities = visibleCities;
    }
    
    if (cities[index]) {
      this.searchInput.value = cities[index].name;
      this.hideDropdown();
      this.getWeatherData(cities[index].name);
    }
  }
  
  getVisibleCities() {
    const query = this.searchInput.value.toLowerCase().trim();
    return this.cities.filter(city => 
      city.name.toLowerCase().includes(query) || 
      city.fullName.toLowerCase().includes(query)
    ).slice(0, 8);
  }
  
  handleKeyNavigation(e) {
    const visibleCities = this.getVisibleCities();
    
    if (visibleCities.length === 0) return;
    
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        this.selectedIndex = Math.min(this.selectedIndex + 1, visibleCities.length - 1);
        this.highlightCity(this.selectedIndex);
        break;
        
      case 'ArrowUp':
        e.preventDefault();
        this.selectedIndex = Math.max(this.selectedIndex - 1, -1);
        this.highlightCity(this.selectedIndex);
        break;
        
      case 'Escape':
        this.hideDropdown();
        break;
    }
  }
  
  highlightCity(index) {
    this.clearHighlight();
    
    if (index >= 0) {
      const items = this.cityDropdown.querySelectorAll('li');
      if (items[index]) {
        items[index].classList.add('highlighted');
        this.selectedIndex = index;
      }
    }
  }
  
  clearHighlight() {
    const highlighted = this.cityDropdown.querySelectorAll('li.highlighted');
    highlighted.forEach(item => item.classList.remove('highlighted'));
  }
  
  getCountryName(countryCode) {
    const countries = {
      'IN': 'India',
      'BD': 'Bangladesh',
      'US': 'United States',
      'GB': 'United Kingdom',
      'FR': 'France',
      'JP': 'Japan',
      'AU': 'Australia',
      'CA': 'Canada',
      'DE': 'Germany',
      'ES': 'Spain',
      'IT': 'Italy',
      'NL': 'Netherlands',
      'BE': 'Belgium',
      'AT': 'Austria',
      'CH': 'Switzerland',
      'SE': 'Sweden',
      'DK': 'Denmark',
      'NO': 'Norway',
      'FI': 'Finland',
      'RU': 'Russia',
      'CN': 'China',
      'HK': 'Hong Kong',
      'SG': 'Singapore',
      'TH': 'Thailand',
      'PH': 'Philippines',
      'ID': 'Indonesia',
      'MY': 'Malaysia',
      'KR': 'South Korea',
      'EG': 'Egypt',
      'AE': 'UAE',
      'TR': 'Turkey',
      'BR': 'Brazil',
      'AR': 'Argentina',
      'MX': 'Mexico',
      'PE': 'Peru',
      'CO': 'Colombia',
      'CL': 'Chile',
      'NZ': 'New Zealand',
      'ZA': 'South Africa',
      'NG': 'Nigeria',
      'KE': 'Kenya',
      'MA': 'Morocco'
    };
    
    return countries[countryCode] || countryCode;
  }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new WeatherApp();
});
