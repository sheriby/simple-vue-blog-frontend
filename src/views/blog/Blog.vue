<template>
  <div id="blog">
    <blog-cover :title="title" :date="date" :view="view" :cover="cover"/>
    <blog-content :content="content"/>
  </div>
</template>

<script>
  import BlogCover from '@/views/blog/BlogCover'
  import BlogContent from '@/views/blog/BlogContent'
  export default {
    name: "Blog",
    components: {BlogContent, BlogCover},
    data() {
      return {
        cover: 'https://cdn.jsdelivr.net/gh/sheriby/cdn@1.12/img/cover/15.jpg',
        title: 'Linux学习日记01',
        date: '2020-08-05',
        view: 8848,
        content: `<h1 id="springbootmybatis">SpringBoot&amp;MyBatis</h1>
<h2 id="使用spring-boot整合mybatis">使用<code>Spring Boot</code>整合<code>MyBatis</code></h2>
<p>之前我们已经使用过注解版的<code>Spring</code>整合<code>MyBatis</code>了，这里使用<code>Spring Boot</code>基本上也是一样的。这里我们就将之前的<code>SpringInAction</code>的<code>Taco Cloud</code>项目中的持久化技术从<code>JdbcTemplate</code>换成<code>MyBatis</code>。</p>
<h3 id="引入依赖">引入依赖</h3>
<p>只需要引入<code>MyBatis</code>的<code>starter</code>就行了。</p>
<pre><code class="language-xml">&lt;dependency&gt;
    &lt;groupId&gt;org.mybatis.spring.boot&lt;/groupId&gt;
    &lt;artifactId&gt;mybatis-spring-boot-starter&lt;/artifactId&gt;
    &lt;version&gt;2.1.3&lt;/version&gt;
&lt;/dependency&gt;
</code></pre>
<h3 id="配置mybatis">配置<code>MyBatis</code></h3>
<p>在<code>application.yml</code>中我们已经配置好了数据库连接的各种配置，<code>DataSource</code>也会自动注入到容器当中。有了<code>MyBatis</code>的<code>starter</code>，<code>SqlSessionFactoryBean</code>也会自动注入到容器当中。也就是说我们只需要写<code>Mapper</code>，要用的时候直接从容器中获取就行了，真的是非常的方便。</p>
<h4 id="配置mapperscan">配置<code>MapperScan</code></h4>
<p>在<code>Spring Boot</code>的引导类添加<code>MapperScan</code>的注解指定需要扫描的包。</p>
<pre><code class="language-java">@SpringBootApplication
@MapperScan(basePackages = &quot;com.sher.tacos.repository&quot;, annotationClass = Mapper.class)
public class TacoCloudApplication implements WebMvcConfigurer {

    public static void main(String[] args) {
        SpringApplication.run(TacoCloudApplication.class, args);
    }
    ...
}
</code></pre>
<h4 id="开启mybatis的sql语句打印功能">开启<code>MyBatis</code>的<code>SQL</code>语句打印功能</h4>
<p>在调试的时候，需要看看<code>SQL</code>语句的执行情况。在<code>application.yml</code>中添加。</p>
<pre><code class="language-yml">mybatis:
  configuration:
    log-impl: org.apache.ibatis.logging.stdout.StdOutImpl
</code></pre>
<h3 id="编写repository">编写<code>Repository</code></h3>
<p>这里的<code>Mapper</code>，很多时候还被称为<code>Repository</code>或者<code>DAO</code>什么的。就像上面的<code>Entity</code>实体类还有时候被称为<code>Bean Pojo Demain</code>什么什么的。按照自己习惯的来就好了，名字什么的无所谓。</p>
<h4 id="ingredientrepository"><code>IngredientRepository</code></h4>
<pre><code class="language-java">@Mapper
@Repository
public interface IngredientRepository {

    @Select(&quot;select * from Ingredient&quot;)
    List&lt;Ingredient&gt; findAll();

    @Select(&quot;select * from Ingredient where id = #{id}&quot;)
    Ingredient findOne(String id);

    @Insert(&quot;insert into Ingredient values(#{id}, #{name}, #{type})&quot;)
    int save(Ingredient ingredient);
}
</code></pre>
<p>这里我们给接口添加了一个<code>@Repository</code>注解，其实这个添加不添加效果都是一样。不添加的话，运行也不会报错（在<code>Spring</code>注解版的时候我们没有添加），但是<code>Idea</code>会提醒我们无法<code>Autowired</code>，为了消除这个误报，我才添加了这个注解。</p>
<p>返回的结果可以自动的封装，真的是非常的智能。看第三个方法，<code>Ingredient</code>的<code>type</code>属性是一个<code>Ingredient.Type</code>类型的，但是这里会自动的转换为<code>String</code>类型，也就是自动调用了<code>toString</code>方法。</p>
<h4 id="userrepository"><code>UserRepository</code></h4>
<pre><code class="language-java">@Mapper
@Repository
public interface UserRepository {

    @Select(&quot;select * from User where username = #{username}&quot;)
    User findByUsername(String username);

    @Insert(&quot;insert into User (username, password, fullname, street, city, state, zip, phoneNumber)&quot; +
            &quot;values (#{username}, #{password}, #{fullname}, #{street}, #{city}, #{state}, #{zip}, #{phoneNumber})&quot;)
    @Options(useGeneratedKeys = true, keyProperty = &quot;id&quot;, keyColumn = &quot;id&quot;)
    int save(User user);
}
</code></pre>
<p>这里的<code>@Insert</code>虽然长，但是并不复杂，这是插入的属性多了点。这种情况我也不太清楚如何省略。</p>
<p>主要的看点是<code>@Options</code>注解，在<code>User</code>表中，我们设置了主键自增，所以我们没有插入主键<code>id</code>。使用</p>
<pre><code class="language-java">@Options(useGeneratedKeys = true, keyProperty = &quot;id&quot;, keyColumn = &quot;id&quot;)
</code></pre>
<p>可以将主键<code>id</code>返还给对象的<code>id</code>属性。</p>
<h4 id="tacorepository"><code>TacoRepository</code></h4>
<pre><code class="language-java">@Mapper
@Repository
public interface TacoRepository {

    @Insert(&quot;insert into Taco (name, createdAt) values(#{name}, #{createdAt})&quot;)
    @Options(useGeneratedKeys = true, keyColumn = &quot;id&quot;, keyProperty = &quot;id&quot;)
    int save(Taco design);


    @Insert(&quot;&lt;script&gt;&quot; +
            &quot;insert into Taco_Ingredients (taco, ingredient) values &quot; +
            &quot;&lt;foreach collection='ingredient' item='inid' separator=','&gt;&quot; +
            &quot;(#{id}, #{inid})&quot; +
            &quot;&lt;/foreach&gt;&lt;/script&gt;&quot;)
    int saveIngredient(Taco design);
}
</code></pre>
<p>这里将原本的一个<code>save</code>方法拆分成了两个方法。因为一个方法只可以执行一条<code>SQL</code>语句。在原本的方法的内容，调用了多条<code>SQL</code>语句操作了多条表，我认为是不合理的。</p>
<p>那么该如何调用方法呢？难道是按顺序调用这两条方法。其实不然，我们需要编写<code>Service</code>层来操作<code>Repository</code>，我们在<code>Controller</code>或者其他地方的时候注入<code>Service</code>而不是<code>Repository</code>。这也是一个很基本的结构——<code>@Controller &lt;- @Service &lt;- @Repository</code>。在书中忽略了<code>Service</code>，其实是不应该的。</p>
<p>回到第二个<code>@Insert</code>中，使用<code>&lt;script&gt;</code>为了使用动态<code>SQL</code>，也就是后面需要使用的<code>&lt;foreach&gt;</code>，<code>Taco</code>对象的<code>ingredient</code>是<code>List&lt;String&gt;</code>类型的，添加的需要遍历。其生成的语句类似如下。</p>
<pre><code class="language-sql">insert into xx (xx, xx) values (xx, xx), (xx, xx), (xx, xx)
</code></pre>
<h4 id="orderrepository"><code>OrderRepository</code></h4>
<pre><code class="language-java">@Mapper
@Repository
public interface OrderRepository {

    @Insert(&quot;insert into Taco_Order (name, street, city, state, zip, ccNumber, &quot; +
            &quot;ccExpiration, ccCvv, placedAt) values(&quot; +
            &quot;#{name}, #{street}, #{city}, #{state}, #{zip}, #{ccNumber}, &quot; +
            &quot;#{ccExpiration}, #{ccCVV}, #{placedAt})&quot;)
    @Options(useGeneratedKeys = true, keyColumn = &quot;id&quot;, keyProperty = &quot;id&quot;)
    int save(Order order);

    @Insert(&quot;&lt;script&gt;&quot; +
            &quot;insert into Taco_Order_Tacos (tacoOrder, taco) values &quot; +
            &quot;&lt;foreach collection='tacos' item='taco' separator=','&gt;&quot; +
            &quot;(#{id}, #{taco.id})&quot; +
            &quot;&lt;/foreach&gt;&lt;/script&gt;&quot;)
    int saveTaco(Order order);
}
</code></pre>
<p>同样将一个方法分成了两个方法，同样的内容就叭说了。唯一需要看看的就是第二个<code>@Insert</code>中，我们也使用了动态<code>SQL</code>的<code>&lt;foreach&gt;</code>，不过这次遍历的是<code>List&lt;Taco&gt;</code>，得到的<code>item</code>也是对象，获取对象的属性直接通过<code>xx.xx</code>的方式。也就是说，如果属性是一个对象，想要获取属性对象的属性，可以通过<code>属性.属性</code>的方式。</p>
<h3 id="编写service">编写<code>Service</code></h3>
<h4 id="ingredientservice"><code>IngredientService</code></h4>
<pre><code class="language-java">@Service
public class IngredientService {

    private final IngredientRepository ingredientRepository;

    @Autowired
    public IngredientService(IngredientRepository ingredientRepository) {
        this.ingredientRepository = ingredientRepository;
    }

    public List&lt;Ingredient&gt; findAll() {
        return ingredientRepository.findAll();
    }

    public Ingredient findOneById(String id) {
        return ingredientRepository.findOne(id);
    }

    public Ingredient saveIngredient(Ingredient ingredient) {
        ingredientRepository.save(ingredient);
        return ingredient;
    }
}
</code></pre>
<h4 id="userservice"><code>UserService</code></h4>
<pre><code class="language-java">@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User findUserByName(String name) {
        return userRepository.findByUsername(name);
    }

    public User saveUser(User user) {
        userRepository.save(user);
        return user;
    }
}
</code></pre>
<h4 id="tacoservice"><code>TacoService</code></h4>
<pre><code class="language-java">@Service
public class TacoService {

    private final TacoRepository tacoRepository;

    @Autowired
    public TacoService(TacoRepository tacoRepository) {
        this.tacoRepository = tacoRepository;
    }

    public Taco saveTacoDesign(Taco taco) {
        taco.setCreatedAt(new Date());
        tacoRepository.save(taco);
        tacoRepository.saveIngredient(taco);

        return taco;
    }
}
</code></pre>
<h4 id="orderservice"><code>OrderService</code></h4>
<pre><code class="language-java">@Service
public class OrderService {

    private final OrderRepository orderRepository;

    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public Order saveOrder(Order order) {
        order.setPlacedAt(new Date());
        orderRepository.save(order);
        orderRepository.saveTaco(order);

        return order;
    }
}
</code></pre>
<h3 id="编写测试">编写测试</h3>
<p>现在我们就可以直接删除之前写的那些<code>Jdbc</code>的<code>impl</code>了。将注入<code>Repository</code>换成注入<code>Service</code>，然后修改一下方法名字，项目就可以完美的运行起来。</p>
<p>但是我们肯定是写一步测试一步，不可能是直接写完跑的，不然发生问题调试起来会很难搞。使用<code>Spring Boot</code>的测试，要比<code>Spring</code>难搞一点。</p>
<p>首先引入<code>spring-boot-starter-test</code></p>
<pre><code class="language-xml">&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-test&lt;/artifactId&gt;
    &lt;scope&gt;test&lt;/scope&gt;
&lt;/dependency&gt;
</code></pre>
<p>编写<code>Test</code>类做测试，如</p>
<pre><code class="language-java">@SpringBootTest
@RunWith(SpringRunner.class)
public class MapperTest {

    @Autowired
    IngredientRepository ingredientRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    TacoRepository tacoRepository;

    @Autowired
    OrderRepository orderRepository;

    @Test
    public void testIngredient() {
        System.out.println(ingredientRepository.findAll());
        Ingredient ingredient = new Ingredient(&quot;abc&quot;, &quot;sher&quot;, Ingredient.Type.PROTEIN);
        int save = ingredientRepository.save(ingredient);
        System.out.println(save);
    }

    .......
}
</code></pre>
<p>需要添加上面的两个测试用的注解，测试用的组件直接注入就好了。</p>
<p>至此我们就将<code>Taco Cloud</code>的持久化层技术换成了<code>MyBatis</code>，简洁了不少呢。</p>`
      }
    }
  }
</script>

<style lang="less" scoped>

  div#blog {
    margin-top: 61px;
    height: 1000px;
  }

</style>

